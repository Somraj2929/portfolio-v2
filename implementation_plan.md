# Premium Feature Implementation Plan

We will be implementing the five masterclass features proposed to elevate the portfolio to the absolute top tier.

## Proposed Changes

### Global Styling (Scrollbar)
#### [MODIFY] [globals.css](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/app/globals.css)
- Implement custom `::-webkit-scrollbar`, `::-webkit-scrollbar-thumb`, and `::-webkit-scrollbar-track` using deep blues and high-transparency rendering to replace the default OS blocky scrollbar.

### Flashlight UI (Mouse Tracker)
#### [NEW] [MouseGlow.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/components/MouseGlow.tsx)
- Create a client component that spans the viewport.
- Uses a `mousemove` event listener to track XY coordinates.
- Renders a massive, soft `radial-gradient(600px circle at Xpx Ypx, rgba(59,130,246,0.1), transparent)` following the cursor.
#### [MODIFY] [layout.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/app/layout.tsx)
- Inject `<MouseGlow />` at the root so it persists across the entire experience.

### Command Palette
#### [NEW] [CommandMenu.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/components/CommandMenu.tsx)
- Use standard `useEffect` to listen for `CMD+K` or `CTRL+K` keypresses.
- Render an absolute-positioned, glassmorphism modal with quick-links linking to: Resume, Email, Projects, LinkedIn, and About sections.
- We will build this using pure Framer Motion and Tailwind to avoid installing heavy external dependencies like `cmdk` if possible, keeping the bundle incredibly fast.
#### [MODIFY] [layout.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/app/layout.tsx)
- Add `<CommandMenu />` provider to the global layout.

### Infinite Tech Marquee
#### [NEW] [TechMarquee.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/components/TechMarquee.tsx)
- Create a pure CSS infinite horizontal loop displaying tools (Next.js, Python, Figma, SQL, React, etc.).
- Build custom Tailwind animations in `globals.css` (`@keyframes scroll`) to make the performance buttery smooth without heavy external React JS libraries.
#### [MODIFY] [page.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/app/page.tsx)
- Inject `<TechMarquee />` directly beneath the Hero section for immediate high-end visual impact.

### OpenGraph SEO Metadata
#### [NEW] [opengraph-image.png](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/public/opengraph-image.png)
- Autogenerate a stunning, dark-mode abstract "AI tech map" preview image using the AI image generation tool.
- Optimize the image and drop it into `public/`.
#### [MODIFY] [layout.tsx](file:///c:/Users/somraj.b/Desktop/Somraj/portfolio/src/app/layout.tsx)
- Add complete OpenGraph and Twitter card metadata mapping to the new image to ensure that sharing the portfolio URL renders out a gorgeous preview box anywhere on the internet.

---

## User Review Required

> [!IMPORTANT]
> Please review this plan. As soon as you hit **Approve**, I will begin writing the components, modifying the CSS, and generating the OpenGraph image.
