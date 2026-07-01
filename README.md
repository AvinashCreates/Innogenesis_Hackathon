# INNOGENESIS 2026 — NRI Deemed to be University flagship Hackathon

An ultra-premium, high-voltage national-level 24-hour hackathon landing platform styled with cosmic cyber-aesthetic parameters, dynamic layouts, and high-readability modular sections.

## 🚀 Newly Implemented Enhancements & Engineering Metrics

### 1. Ultra-Premium Spacious Header & Enlarged Typography
- **Expanded Dimensions**: Raised navigation navbar height to a premium `h-24` (96px) on desktop interfaces, ensuring breathable positioning.
- **Enlarged Navigation**: Amplified nav-links and action call-to-actions to `text-base` and `text-lg` with generous font weight indicators to boost readable spacing and tap accuracy.
- **Proportional Scaling**: Rescaled stats tags, perks rows, and domain previews across components to offer seamless structural readability on screens of all sizes.

### 2. Dual-Target Cursor Elastic Lag Physics (`index2.html`)
- **Mechanical Drag Interpolation**: Implemented a lagging coordinate formula that captures mouse inputs and floats the target outline with an elegant physics drag matrix:
  $$oX = oX + (mX - oX) \times 0.22$$
  $$oY = oY + (mY - oY) \times 0.22$$
- **Click Feedback Transitions**: Added micro-animations using custom scale down transformations, high-intensity red outline triggers, and soft red glow backdrops (`.is-clicking` state) during mouse presses.
- **Theme Adapting Visibility**: Seamlessly matches custom CSS theme colors, switching to a high-contrast deep purple indicator in Light Mode to guarantee cursor visibility on off-white surfaces.

### 3. Masked Grid Layouts & Drifting Background Orbs (`index.html`)
- **Symmetric Masked Grid**: Configured a `64px` grid pattern coupled with a radial-gradient mask to smoothly fade lines toward page borders, mirroring professional engineering workspaces.
- **Drifting GPU-Accelerated Orbs**: Added floating backdrop nodes that slowly drift via keyframed CSS transform transitions to convey depth.

### 4. Native Light & Dark Theme Selection Engine
- **CSS Custom Variables**: Mapped background colors, texts, border lines, card plates, grids, and particles to highly dynamic custom properties (`:root` vs `.light-theme`).
- **Seamless State Sync**: Designed a stateful toggle button in the header bar which updates the HTML root classes dynamically with elegant `0.4s` cubic-bezier transition curves for high-fidelity sensory feedback.

---

## 🛠️ Tech Stack & Framework Integrity
- **Build System**: React 18+ powered by Vite & TypeScript
- **Styling Layer**: Tailwind CSS utility parameters
- **Transitions**: Native keyframed cubic-bezier animations & custom CSS variables
- **Iconographies**: Lucide-React
