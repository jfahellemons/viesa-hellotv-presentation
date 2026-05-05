# Viesa Presentation Slides - Implementation Plan

## Project Overview
Build an interactive presentation web app for Viesa featuring a 5-slide deck with a sidebar navigation and main content area. The app will use the Viesa brand identity (dark teal primary color, modern aesthetic) and provide a smooth, professional viewing experience.

## Design System

### Color Palette
- **Primary Brand**: Dark Teal (`#1F5169` / viesa-primary)
- **Secondary Accent**: White (`#FFFFFF`)
- **Background**: Light Off-White (`#F8F9FA`)
- **Text Primary**: Dark Gray (`#1A1A1A`)
- **Text Secondary**: Medium Gray (`#666666`)
- **Borders/Dividers**: Light Gray (`#E5E5E5`)

### Typography
- **Headings**: Inter (system font via Geist)
- **Body**: Inter (system font via Geist)
- Font weights: 400 (regular), 600 (semibold), 700 (bold)

### Spacing & Layout
- Use Tailwind spacing scale (4px base unit)
- Sidebar: Fixed width on desktop (~250px), collapsible on mobile
- Main content: Responsive flex layout
- Gap classes for component spacing
- Border radius: 8px for cards/buttons

---

## Technical Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React hooks (useState) + optional SWR for future data fetching
- **UI Components**: shadcn/ui (Button, Card, etc.)

### Architecture Decisions
1. **No URL routing for slides** (initially) - state managed in React component
2. **Sidebar + main layout**: Flexbox-based responsive design
3. **Fade transitions** between slides (CSS transitions)
4. **Mobile-first responsive design**: Hamburger menu on mobile

---

## Component Structure

```
app/
├── layout.tsx (with viesa logo and branding)
├── page.tsx (main presentation page)
components/
├── PresentationLayout.tsx (sidebar + content wrapper)
├── Sidebar.tsx (navigation with slide list)
├── SlideContent.tsx (renders current slide)
├── slides/
│   ├── IntroSlide.tsx
│   ├── ProblemSlide.tsx
│   ├── DependenciesSlide.tsx
│   ├── SolutionSlide.tsx
│   └── RecommendationsSlide.tsx
├── Logo.tsx (viesa logo component)
public/
├── viesa-logo.png
```

---

## Slide Content Structure

| Slide | Title | Content | Key Elements |
|-------|-------|---------|--------------|
| 1 | Intro | Company name + brief tagline | Logo, centered layout |
| 2 | Probleem | Problem description + context | Text blocks, icons |
| 3 | Afhankelijkheden | Dependencies/challenges list | Bulleted list, visual hierarchy |
| 4 | Oplossing | Solution description + demo area | Text + demo placeholder, call-to-action |
| 5 | Aanbevelingen | Recommendations + next steps | Numbered list, action buttons |

---

## Implementation Roadmap

### Phase 1: Setup & Foundation
- [ ] Configure Tailwind design tokens in `tailwind.config.ts` + `globals.css`
- [ ] Add viesa logo to `public/` folder
- [ ] Create `Logo.tsx` component
- [ ] Update `layout.tsx` with logo, brand colors, and metadata

### Phase 2: Layout & Navigation
- [ ] Build `PresentationLayout.tsx` (flex container with sidebar + main)
- [ ] Build `Sidebar.tsx` (navigation, active state styling, responsive menu)
- [ ] Implement slide state management (useState in Page component)
- [ ] Add responsive behavior (hamburger menu on mobile)

### Phase 3: Slide Components
- [ ] Create base `SlideContent.tsx` wrapper with fade transitions
- [ ] Build individual slide components (Intro, Problem, Dependencies, Solution, Recommendations)
- [ ] Add consistent spacing, typography, and color usage per design system
- [ ] Populate with placeholder content from the plan

### Phase 4: Interactions & Polish
- [ ] Keyboard navigation (arrow keys to navigate slides)
- [ ] Smooth fade transitions between slides
- [ ] Active state indication on sidebar buttons
- [ ] Mobile responsiveness testing
- [ ] Browser compatibility check

### Phase 5: (Optional Future) Enhancement
- [ ] Add URL routing for bookmarkable slides (e.g., `/slides/2-problem`)
- [ ] Add animations/entrance effects
- [ ] Integrate real demo component on Solution slide

---

## Key Implementation Notes

### Styling Approach
- Use design tokens throughout (e.g., `bg-viesa-primary`, `text-primary`)
- All padding/margins via Tailwind spacing scale
- Flexbox for all layouts (no floats or absolute positioning)
- Semantic HTML with proper ARIA labels

### Mobile Responsiveness
- Sidebar: Fixed on desktop (md+), collapsible hamburger on mobile
- Content: Single-column on mobile, full-width on larger screens
- Font sizes: Smaller on mobile, scale up on desktop

### Accessibility
- Semantic slide structure with proper heading hierarchy
- Active slide highlighted with aria-current="page"
- Keyboard-navigable sidebar buttons
- Alt text for logo image
- Sufficient color contrast (WCAG AA compliant)

### State Flow
```
Page (manages currentSlide state)
├── PresentationLayout
│   ├── Sidebar (displays slides list, calls onSlideChange)
│   └── SlideContent (renders activeSlide with fade animation)
```

---

## Decisions Made (from feedback)
1. **No URL routing initially** - simpler state management, can add later
2. **Fade transitions** - clean, professional feel
3. **Fixed sidebar on desktop, hamburger on mobile** - responsive UX
4. **Design tokens in Tailwind** - maintainable, consistent styling
5. **Arrow key navigation** - accessibility feature
6. **Viesa brand colors as primary** - cohesive branding

---

## Estimated Complexity
- **Layout & Navigation**: Medium (responsive design, state management)
- **Slide Content**: Low (static content, consistent styling)
- **Interactions**: Low-Medium (transitions, keyboard nav)
- **Overall**: Medium (manageable in one iteration)

---

## Success Criteria
- [ ] All 5 slides render correctly with proper content
- [ ] Sidebar navigation works on desktop and mobile
- [ ] Transitions smooth and professional
- [ ] Responsive on mobile, tablet, and desktop
- [ ] Logo and brand colors applied consistently
- [ ] Accessible (keyboard nav, ARIA labels, contrast)
