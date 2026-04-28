# Integration Guide: Cards Stack Component

## Project Setup Requirements

### Supported Technologies
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Animation Library**: Framer Motion

### Prerequisites Checklist

Ensure your project has:
- [ ] TypeScript configured
- [ ] Tailwind CSS installed and configured
- [ ] shadcn/ui initialized via CLI
- [ ] `/components/ui` folder structure in place

**If missing any requirements**, run:
```bash
# Initialize shadcn/ui (includes Tailwind setup)
npx shadcn-ui@latest init

# Install TypeScript (if not present)
npm install --save-dev typescript

# Verify Tailwind is configured in tailwind.config.ts
```

---

## Component Installation

### 1. Install Dependencies

```bash
npm install motion framer-motion
```

### 2. Copy Component Files

Place the following file in `/components/ui/`:

**File**: `cards-stack.tsx`
```tsx
"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          z,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
```

### 3. Create Demo Components

Place the following file in `/components/blocks/demo.tsx`:

```tsx
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

// Demo data structures
const PROCESS_PHASES = [...]
const WORK_PROJECTS = [...]
const ACHIEVEMENTS = [...]

export { Process, Work, Achievements }
```

---

## Component Architecture

### Core Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `ContainerScroll` | 3D perspective container wrapper | `children`, `className`, standard HTML attributes |
| `CardSticky` | Sticky-positioned card with stacking animation | `index`, `incrementY`, `incrementZ`, `className`, `children` |

### Key Props & Behavior

**`CardSticky` Interface:**
- `index` (number, required): Controls vertical and depth positioning
- `incrementY` (number, default: 10): Vertical offset per card in pixels
- `incrementZ` (number, default: 10): Depth/z-index increment per card
- `children`: Card content
- `className`: Additional Tailwind classes
- `style`: Inline styles (e.g., background color, rotation)

---

## Implementation Patterns

### Pattern 1: Sequential Process Timeline
**Use Case**: Displaying step-by-step workflows (research → design → development → launch)

```tsx
<ContainerScroll className="min-h-[400vh] space-y-8 py-12">
  {phases.map((phase, index) => (
    <CardSticky
      key={phase.id}
      index={index + 2}
      className="rounded-2xl border p-8"
      incrementY={10}
      incrementZ={10}
    >
      <h2>{phase.title}</h2>
      <p>{phase.description}</p>
    </CardSticky>
  ))}
</ContainerScroll>
```

### Pattern 2: Portfolio/Project Gallery
**Use Case**: Showcasing work samples with images and metadata

```tsx
<ContainerScroll className="min-h-[500vh]">
  {projects.map((project, index) => (
    <CardSticky
      key={project.id}
      index={index}
      incrementY={60}
      incrementZ={5}
      className="overflow-hidden rounded-sm"
    >
      <img src={project.imageUrl} alt={project.title} />
    </CardSticky>
  ))}
</ContainerScroll>
```

### Pattern 3: Achievement Statistics
**Use Case**: Highlighting metrics with visual emphasis

```tsx
<ContainerScroll className="space-y-8 p-12">
  {achievements.map((achievement, index) => (
    <CardSticky
      key={achievement.id}
      index={index + 2}
      incrementY={20}
      style={{ background: achievement.bg, rotate: index + 2 }}
      className="h-72 w-[420px]"
    >
      <h1>{achievement.title}</h1>
      <h3>{achievement.description}</h3>
    </CardSticky>
  ))}
</ContainerScroll>
```

---

## Data & State Management

### Expected Data Structure

Each use case requires:

1. **Array of objects** with unique `id` properties
2. **Content fields** (title, description, imageUrl, etc.)
3. **Optional styling metadata** (background colors, rotation values)

### State Considerations

- **Animation state**: Handled internally by Framer Motion
- **Scroll position**: Detected automatically via sticky positioning
- **No external state management required** for basic usage
- For **dynamic data updates**, pass new props to re-render

---

## Responsive Design Behavior

### Desktop (md breakpoint and above)
- Left sidebar sticky (fixed height)
- Right column scrolls with card stacking effects
- Cards maintain full width with optimized spacing

### Mobile (below md breakpoint)
- Single column layout
- Sticky sidebar hidden
- Cards stack sequentially without side-by-side layout

**Key Tailwind classes**:
```tsx
className="grid md:grid-cols-2"  // 2-column on desktop
className="md:sticky md:h-svh"  // Sticky on desktop only
```

---

## Asset Requirements

### Images
- Use Unsplash stock images or your own CDN
- Recommended dimensions: 1200x600px minimum
- Formats: JPEG, WebP (optimized)

### Icons
- Source from `lucide-react` for consistency
- Example: `import { ArrowRight } from "lucide-react"`

---

## Integration Checklist

- [ ] Dependencies installed (`motion`)
- [ ] Component file copied to `/components/ui/cards-stack.tsx`
- [ ] Demo components created in `/components/blocks/demo.tsx`
- [ ] Data arrays populated (or connected to data source)
- [ ] Image URLs verified (Unsplash or CDN)
- [ ] Tailwind classes applied correctly
- [ ] TypeScript types validated
- [ ] Responsive behavior tested on mobile/desktop
- [ ] Scroll performance verified (use Chrome DevTools)

---

## Common Customization Points

| Aspect | How to Customize |
|--------|------------------|
| Card spacing | Adjust `incrementY` value (10–60px typical) |
| Depth effect | Adjust `incrementZ` value (5–20 typical) |
| Colors | Modify `className` or inline `style` prop |
| Border/Shadow | Update Tailwind classes in `className` |
| Container height | Set `min-h-[400vh]` to `min-h-[300vh]`, etc. |
| Animation speed | Framer Motion `transition` prop (if needed) |

---

## References

- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Setup](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

# Academic Journey

01
M.S in Business Analytics
University Of Illinois Urbana Champaign
2025-2026
GPA - 3.92*

02
B.E. in Electronics and Telecommunication
Mumbai University
2017-2021
CGPA - 8.93


# Professional Journey

01   AWG - Business Practicum
Commerical Analytics

2025

02   Bosch - Business Practicum
Requirement gathering, gap analysis,  process improvements

2025

03   Digital Risk Accessibility
Measured and improved digital inclusivity by mapping accessibility gaps to user engagement metrics, resulting in a 15% uplift in screen-reader session completion.

2023-2025

04   DigiplusIT
Optimized telecom event data, led building data pipelines that fed dashboards

2022-2023

05   Primemover Engineering Pvt Ltd
Conducted data extraction and validations, integrated APIs, data analytics

2021-2022

06   Tata Consultancy & Services
Developed and maintained automated validation flows and payment monitoring 
pipelines

2021-2022

07   Eduvance Pvt Ltd
Data Analytics Internship