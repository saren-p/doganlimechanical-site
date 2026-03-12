# Doganli Mechanical Website

Single-page commercial website for **Doganli Mechanical**, a province-wide Ontario contractor focused strictly on commercial and industrial HVAC.

## Company Profile
Doganli Mechanical is a **Commercial and Industrial HVAC contractor** operating across Ontario, Canada.

### Core Services
- Commercial HVAC systems
- Industrial mechanical systems
- Restaurant ventilation systems
- Preventative maintenance programs
- 24/7 emergency HVAC repair

> Residential service is **out of scope**. Do not add residential content or positioning.

## Official Contact Information
Use these exact details everywhere:
- **Phone:** (905) 553-2949
- **Email:** info@doganlimechanical.com
- **Address:** 30 MacIntosh Blvd Unit #12, Concord, ON L4K 4P1

## Target Clients
- Restaurants and food service operations
- Industrial facilities and manufacturing plants
- Commercial buildings
- Property management firms (strategic priority)

## Brand Positioning & Voice
All copy and UI should reinforce:
- Reliable, operational capability
- Industrial-grade, certified execution
- 24/7 availability
- Large-scale commercial readiness
- Strictly non-residential focus

**Tone:** Industrial. Authoritative. Engineered. Never casual.

## Design System (Strict)

### Color Palette (do not deviate)
- Primary background: `#1E1E1E` (Dark Steel)
- Section dark: `#0F1C17` (Deep Green)
- Section mid: `#1C2E27` (Industrial Green)
- Section accent: `#243830` (Mid Green)
- Concrete background: `#2A2A2A`
- Bronze accent: `#A56A3F`
- Bronze light: `#C28550`
- Off-white text: `#E8E4DC`
- Muted text: `#9A9590`
- Borders: `rgba(255,255,255,0.08)`

### Typography
- Headlines: `'Barlow Condensed'` (700/800), uppercase, tight tracking
- Body: `'Barlow'` (300/400/500/600)
- Load from Google Fonts; do not replace with Inter/Roboto/system defaults

### Buttons
- **Primary CTA:** `#A56A3F` background, white text, square corners
- **Ghost:** transparent, `1px` border `rgba(232,228,220,0.35)`, off-white text
- **Dark:** `#0F1C17` background, white text
- Every button needs hover and active/pressed states

### Layout Rules
- Max content width: `1440px`
- Horizontal padding: `0 40px`
- Grid seams/gaps: `2px`
- Section vertical padding: `80–96px`
- Border radius: **0px everywhere**
- Divider/border tone: `rgba(255,255,255,0.08)`

### Animation Rules
- Subtle and deliberate only
- No bounce/elastic/playful motion
- Use `0.2s–0.3s` ease transitions
- Prefer industrial micro-interactions (underline reveals, slight arrow nudges)

### Never Introduce
- Off-palette colors (especially purple/blue accents)
- Rounded corners
- White section backgrounds
- Residential imagery/language
- Startup/SaaS visual motifs
- Inter or Roboto fonts

## Current Page Structure (Keep This Order)
1. Topbar (emergency, portal, careers)
2. Sticky nav (About, Services, Industries, Maintenance, Emergency + Request Service)
3. Hero (fullscreen, Ken Burns fallback, video-ready)
4. Promo strip (3 cards)
5. About (2-column copy + stat visual)
6. Services (6-card grid)
7. Industries (3+1 grid)
8. Maintenance (tabbed by segment)
9. Stats bar
10. Emergency banner
11. Footer (brand + links + contact)

## Video Asset Status
The hero currently uses a CSS animation fallback.

Expected future asset paths:
- `assets/hero.mp4`
- `assets/hero-bg.jpg`

When assets are added:
1. Replace `.hero-canvas` in `index.html` with:
   ```html
   <video autoplay muted loop playsinline poster="./assets/hero-bg.jpg" class="hero-video">
     <source src="./assets/hero.mp4" type="video/mp4">
   </video>
   ```
2. Add CSS:
   ```css
   .hero-video {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     min-width: 100%;
     min-height: 100%;
     object-fit: cover;
   }
   ```
3. Update the pause toggle JS to control the `<video>` element instead of CSS animation state.

## Development Constraints for Future Changes
1. Read this README before making modifications.
2. Stay within the approved palette.
3. Keep corners square (no border radius).
4. Never add residential content.
5. Preserve spacing conventions (`1440px` max width, `40px` side padding, `2px` grid seams).
6. New sections must follow eyebrow → title → content hierarchy.
7. New buttons must use primary/ghost/dark styles.
8. Keep font pairing (Barlow Condensed + Barlow).
9. Verify sticky-nav anchors after structural changes.
10. Keep the site as a single `index.html` file unless explicitly directed otherwise.
