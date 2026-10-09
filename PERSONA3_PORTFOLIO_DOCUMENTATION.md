# Architecture & Engineering Guide: Persona 3 Reload Portfolio

A comprehensive reverse-engineering and architecture guide for the **Persona 3 Reload Portfolio** created by [David Yappeter](https://github.com/david-yappeter/persona3-porto) (Live site: [david-yappeter.github.io/persona3-porto](https://david-yappeter.github.io/persona3-porto/)).

---

## 1. High-Level Architecture & Tech Stack

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Virtual Stage Engine                            │
│           (1600x900 baseline canvas with letterbox scaling)            │
├────────────────────────────────────────────────────────────────────────┤
│                       Root Layout Chrome                               │
│        (Persistent Web Audio BGM Player + Nav Sound + Touch Portal)    │
├────────────────────────────────────────────────────────────────────────┤
│                     RouteTransition Coordinator                        │
│    (Ghost snapshot DOM retention + Video sync + Organic SVG Clips)     │
├──────────────────────────────────┬─────────────────────────────────────┤
│        2D UI Subsystem           │           3D WebGL Engine           │
│  - Hand-flung slanted type       │  - Three.js + @pixiv/three-vrm      │
│  - Luminance-sorted z-indices    │  - Custom GLSL duotone toon shader  │
│  - Heartbeat polygon slash       │  - Analytical 2-bone IK solver      │
│  - Dual-clip color overlays      │  - Dynamic 2D canvas Tarot cards    │
│  - Synthetic text-stroke         │  - Procedural cloth & hair wind     │
└──────────────────────────────────┴─────────────────────────────────────┘
```

- **Framework:** React 19 (`react@^19.2.8`, `react-dom@^19.2.8`)
- **Router:** React Router v8 (`react-router@^8.3.0`) using data router architecture (`createBrowserRouter`) and code-split layout shells.
- **3D Graphics Engine:** Three.js (`three@^0.186.1`) with `@pixiv/three-vrm` and `OutlineEffect`.
- **Audio Engine:** Pure Web Audio API (`AudioContext`, `AudioBufferSourceNode`, `AnalyserNode`, `GainNode`).
- **Build System:** Vite 8 (`vite@^8.1.5`) + TypeScript 7 (`typescript@^7.0.2`).
- **Styling:** Vanilla CSS with hardware-accelerated CSS custom variables and SVG clip-paths.

---

## 2. Key Architectural Subsystems

### A. Fixed-Aspect Virtual Stage Engine
*Files: `src/utils/stage.ts`, `src/components/Stage/index.tsx`*

- **The Problem:** Standard responsive layouts break the dramatic diagonal composition, baseline angles, and cinematic framing of Persona 3.
- **The Solution:**
  - Standard desktop screens ($\ge 1024 \times 600$) render fluidly.
  - Smaller screens (smartphones, portrait tablets) are framed inside a fixed **$1600 \times 900$** canvas.
  - The canvas scales uniformly via `transform: translate(-50%, -50%) scale(s)` with black letterboxing.
  - Injects `--vw` and `--vh` representing $1\%$ of the virtual stage instead of the physical browser viewport.
  - Canvases multiply `window.devicePixelRatio` by `stageScale()` to prevent rendering wasted pixels.

---

### B. Persona 3 Slanted Typography & Menu System
*Files: `src/data/menuItems.ts`, `src/components/MenuList/index.tsx`, `src/components/MenuItem/index.tsx`, `src/components/MenuList/stacking.ts`*

1. **Per-Item Asymmetry:** Each row contains individual geometric properties:
   - `--indent` (horizontal translation in `em`)
   - `--rot` (baseline rotation in degrees)
   - `--skew` (italic shear angle)
   - `--scale` (size multiplier)
   - `--row-color` and `--row-alpha`
2. **Relative Luminance Stacking:** Overlapping slanted words create rendering conflicts. The app calculates ITU-R BT.709 perceived luminance:
   $$\text{Brightness} = (0.2126R + 0.7152G + 0.0722B) \times \alpha$$
   Layers are given `z-index` strictly from darkest to brightest so overlapping text edges always render cleanly.
3. **Synthetic Stroke Thickening:** Eurostile Extended font is enlarged using:
   ```css
   -webkit-text-stroke: 6px var(--row-color);
   paint-order: stroke fill;
   ```
4. **Heartbeat Slash & Dual-Clip Overlay:**
   - Dual layered triangles clipped using `clip-path: polygon(0 50%, 100% 0, 90% 100%)`.
   - Back layer: neon magenta (`#ff0099`) with a 900ms heartbeat scale pulse.
   - Front layer: white, offset by 5px.
   - Text overlay: A cloned text label clipped to the identical polygon changes text to `#ff0000` where the slash crosses it, while remaining `#000000` outside.
5. **Pointer Re-Arm Guard:** On page transitions, stationary mouse cursors might land directly over an incoming menu item. The list ignores hover events until a real physical `mousemove` event fires.

---

### C. Seamless Video-Preserving Route Transitions
*Files: `src/components/RouteTransition/index.tsx`, `src/components/RouteTransition/transitions/`*

1. **Ghost DOM Retention:** The outgoing route is kept mounted as an inert ghost component (`exiting.node`) rather than unmounted immediately.
2. **Video Frame Continuity:** `resumeVideoAt.ts` inspects the outgoing video element's `currentTime` immediately prior to DOM detachment, allowing the ghost copy to seamlessly resume without resetting to frame 0.
3. **Double Ripple Transition (`DoubleRippleTransition`):**
   - Uses an organic 8-lobe Catmull-Rom smoothed spline path (`BLOB_PATH`).
   - Scales the blob from origin $(20\%, 20\%)$ past the viewport diagonal.
   - Stage 1: Blue screen flash over outgoing page.
   - Stage 2: Staggered reveal of incoming live page.
4. **Permanent Live Container:** A single `<div className="route-live">` is maintained permanently across all routes to prevent browser unmount/remount flickering.

---

### D. Three.js 3D Engine & Persona 3 Shaders
*Files: `src/components/SocialLinkScene/` (`scene.ts`, `toon.ts`, `ik.ts`, `wind.ts`, `card.ts`)*

1. **Custom GLSL Duotone Shading (`toon.ts`):**
   - Injected into Three.js materials via `onBeforeCompile`.
   - Luminance mapping: Remaps fragment luminance through a high-contrast curve.
   - P3 Duotone ramp: Indigo (`#290f85`) $\rightarrow$ Blue (`#2b52ed`) $\rightarrow$ Cyan (`#14c7f7`) $\rightarrow$ Pale Aqua (`#bdfafe`) $\rightarrow$ Pure White (`#ffffff`).
   - Screen-space vertical drift toward purple at the bottom of the viewport.
   - Semi-transparent "see-through" cloth overlay: Dark areas become translucent to show background videos/UI through the character, while hair and highlights remain solid.
2. **Analytical Two-Bone Inverse Kinematics (`ik.ts`):**
   - Rig-agnostic arm posing using the law of cosines:
     $$\cos A = \frac{\text{upper}^2 + \text{reach}^2 - \text{lower}^2}{2 \cdot \text{upper} \cdot \text{reach}}$$
   - Calculates elbow positions along a pole vector and orients upper/lower arm bones with minimal quaternion turns.
3. **Procedural Wind Physics (`wind.ts`):**
   - Parses cloth bone chains matching `/^b[ _]([a-z]+)[ _](jacket|hair|ribon|himo|earphone)(\d+)_\d+$/`.
   - Applies wave-equation propagation down bones with sinusoidal phase offsets and outward flares.
4. **Real-Time Dynamic Tarot Arcana Cards (`card.ts`):**
   - Generates Tarot cards on a $768 \times 1195$ offscreen HTML5 2D canvas with silver foil borders, custom fonts, Roman numerals, and company logos.
   - Uploaded as anisotropic canvas textures to a 3D card mesh.
   - State machine: `held` (in hand), `dangling` (pendulum physics on lanyard string), `floating` (spins in front of open palm during career detail inspections).

---

### E. Web Audio SFX & Background Music System
*Files: `src/utils/sfx.ts`, `src/hooks/MusicPlayer/provider.tsx`, `src/components/MusicPlayer/Waveform.tsx`*

1. **Pre-Decoded Audio Buffers:** Sound effects are fetched upfront as array buffers and decoded into PCM memory in `AudioContext`.
2. **Retrigger & Voice Safety:**
   - 35ms retrigger guard suppresses key auto-repeat bursts.
   - 15ms linear gain ramp-down prevents audio clipping when interrupting voices.
   - Loudness matched to $-24\text{ LUFS}$.
3. **Real-Time FFT Waveform Visualizer:**
   - `AnalyserNode` frequency bins.
   - Focuses on lower $55\%$ of spectrum (bass and drums).
   - 32-bar exponential decay smoothing (`level += (target - level) * 0.35`) rendered with two-color linear gradient on canvas.

---

### F. Multi-Modal Navigation
*Files: `src/hooks/MenuNavigation/`, `src/hooks/Swipe/`, `src/components/TouchControls/`*

- **Keyboard:** Arrow keys, Enter, Backspace/Esc.
- **Gestures:** Horizontal touch swipe listener (`useSwipe`).
- **Touch Portals:** Floating back button portalled to `document.body`, bypassing virtual stage scale so touch targets remain finger-friendly.
