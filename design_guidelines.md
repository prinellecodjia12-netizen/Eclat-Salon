# Design Guidelines for Éclat Salon Website

## Design Approach
**Aesthetic Direction:** Elegant, extravagant beauty salon experience inspired by luxury beauty brands with a romantic, feminine aesthetic. Think high-end Parisian salon meets modern Instagram-worthy spaces.

## Color Palette
- **Primary:** Rich magenta (#D946A6, #E879B9)
- **Secondary:** Soft pink (#FFC0CB, #FFB6D9)
- **Accents:** Pastel tones - lavender (#E9D5FF), peach (#FFE4E1), cream (#FFF5F7)
- **Neutrals:** White (#FFFFFF), soft gray (#F8F8F8) for backgrounds
- **Text:** Deep charcoal (#2D2D2D) for readability

## Typography
- **Headings:** Elegant serif font (Playfair Display or similar) - playful, sophisticated, extravagant feel
  - H1: 3.5rem (desktop), 2.5rem (mobile) - bold weight
  - H2: 2.5rem (desktop), 2rem (mobile) - semibold
  - H3: 1.75rem - regular weight
- **Body:** Clean sans-serif (Montserrat or similar) for readability
  - Body: 1.125rem, regular weight, 1.7 line-height
  - Small text: 0.875rem for captions/footer

## Layout System
- **Spacing Scale:** 4px base unit - use multiples of 4 (8px, 16px, 24px, 32px, 48px, 64px)
- **Container Max-Width:** 1200px with 24px side padding
- **Section Padding:** 80px vertical (desktop), 48px (mobile)

## Page-Specific Designs

### Home Page
**Hero Section:**
- Full viewport height (90vh) with elegant background image of luxury salon interior
- Centered content overlay with translucent dark gradient for text legibility
- Headline: "Welcome to Éclat Salon" - large, elegant serif
- Subheadline: "Where Beauty Meets Artistry" - lighter serif italic
- Primary CTA button with blur backdrop, prominent placement
- Button: Rounded corners (12px), generous padding (16px 48px), magenta with subtle shadow

**Additional Sections:**
- Featured services preview (3-column grid on desktop)
- Customer testimonials with star ratings
- Instagram-style photo grid teaser (4 images)
- Newsletter signup section with elegant form

### Services Page
- Hero banner (40vh) with service-related imagery
- Service categories in elegant card layout (2-column on tablet, 1-column mobile)
- Each service card includes:
  - Decorative icon (scissors, palette, brush - use Font Awesome)
  - Service title (H3)
  - Description paragraph
  - Price range in accent color
  - Soft shadow on hover with smooth transition
- Generous spacing between cards (32px gap)

### Gallery Page
- Masonry-style grid showcasing 6+ images
- Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column
- Images include: Before/after hairstyles, salon interior shots, happy clients, product displays
- Hover effect: Slight zoom + overlay with soft gradient
- Lightbox placeholder comment for future functionality

### Contact Page
- Split layout (desktop): Form (60%) | Info sidebar (40%)
- Contact form with elegant input styling:
  - Soft borders, focus state with magenta accent
  - Input fields: Name, Email, Phone, Message (textarea)
  - Submit button matching primary CTA style
- Sidebar includes:
  - Salon address with location pin icon
  - Phone number with phone icon
  - Business hours
  - Map placeholder (embedded iframe comment)
  - Social media icons

## Component Library

**Header:**
- Fixed/sticky positioning with soft shadow on scroll
- Logo (left): "Éclat Salon" in elegant serif with sparkle accent
- Navigation (right): Horizontal menu with hover underline animation
- Mobile: Hamburger menu (comment for future JS)
- Background: White with subtle transparency

**Footer:**
- Two-section design: Links + Social | Copyright
- Social media icons (Instagram, Facebook, Pinterest) - circular with magenta on hover
- Quick links to all pages
- Newsletter signup field
- Background: Soft pastel gradient (pink to lavender)

**Buttons:**
- Primary: Magenta background, white text, rounded, shadow
- Secondary: Outlined magenta, transparent background
- Hover: Slightly darker magenta, lift effect (translateY -2px)
- All transitions: 0.3s ease

## Visual Effects
- Gradients: Soft radial gradients in hero sections (magenta to pink)
- Shadows: Subtle (0 4px 6px rgba(0,0,0,0.1)) for depth
- Hover animations: Smooth scale (1.05) on images and cards
- Fade-in effect: On page load for main content sections (CSS animation)
- Border radius: Consistent 8px for cards, 12px for buttons

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (multi-column layouts, full effects)

## Images
**Required Images:**
1. **Hero Image (Home):** Luxury salon interior - bright, elegant space with styling chairs, large mirrors, soft pink accents, natural light
2. **Services Banner:** Close-up of hairstylist's hands working on hair with professional tools
3. **Gallery Images (6):**
   - Stunning blonde balayage transformation
   - Elegant updo for special occasion
   - Modern salon interior with pink velvet chairs
   - Happy client smiling in salon chair
   - Colorful hair color swatches/palette
   - Sleek bob haircut - professional finish
4. **Contact Page:** Welcoming salon reception area

All images should feel high-end, well-lit, and professionally shot with pink/magenta color grading.

## Accessibility
- Maintain 4.5:1 contrast ratio for text
- Focus states clearly visible on all interactive elements
- Semantic HTML structure throughout
- Form labels properly associated with inputs
- Alt text placeholders for all images