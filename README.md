# Digital Agency Website — Next.js + TailwindCSS + shadcn/ui

A clean, responsive 2-page digital marketing agency website built with **Next.js (App Router)**, **TailwindCSS**, and **shadcn/ui**.
The focus is on UI and front-end design only (no backend logic).

---

## 🧭 Pages

### 1. Home Page (`/`)

Includes:

* **Navbar** with logo, navigation links, and dark mode toggle.
* **Hero Section** with catchy heading, subtext, CTA buttons, and banner image.
* **Services Section** using `Card` and `Skeleton` components.
* **Case Studies Grid** with image previews.
* **Testimonials** section using `Card`, `Avatar`, and `Skeleton`.
* **Footer** with links and social icons.

### 2. About Page (`/about`)

Includes:

* **Mission & Vision** block with image.
* **Team Section** using `Card` and `Avatar` components.
* **Stats/Fun Facts** grid.
* **Call-to-Action (CTA)** section with gradient background.

---

## 🎨 Design Choices

| Element             | Choice                                                  | Reason                                            |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------- |
| **Color Palette**   | Blue + Indigo gradient with white/dark gray backgrounds | Professional and clean look, matches agency theme |
| **Fonts**           | `Poppins` (Headings), `Inter` (Body)                    | Readable and modern font pairing                  |
| **Typography**      | Bold headlines, medium-weight body text                 | Strong hierarchy and easy readability             |
| **Components Used** | `Button`, `Card`, `Avatar`, `Skeleton` from shadcn/ui   | Ensures consistency and reusable UI blocks        |
| **Hover Effects**   | Subtle translation and shadow transitions               | Adds depth and interactivity                      |
| **Dark Mode**       | UI-only toggle, smooth color transitions                | Accessibility and aesthetic consistency           |

---

## 📱 Responsiveness

Built mobile-first, optimized for:

* **Mobile (≤640px)** — stacked layout, centered text.
* **Tablet (641–1024px)** — two-column sections, balanced spacing.
* **Desktop (≥1025px)** — full grid layout with maximum width of `7xl`.

---

## ⚙️ How to Run Locally

### Prerequisites

* Node.js ≥ 18
* npm or yarn

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/your-username/digital-agency-ui.git
cd digital-agency-ui

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 Folder Structure

```
app/
 ├── layout.tsx         # Root layout with Navbar, Footer, Dark Mode
 ├── page.tsx           # Home page
 ├── about/
 │    └── page.tsx      # About page
components/ui/          # shadcn/ui components
public/images/          # Hero, team, and case study images
```

---

## 💡 Notes

* Skeletons simulate loading states for `Services` and `Testimonials`.
* No external UI templates used; layout is custom-designed.
* All hover transitions, spacing, and colors are consistent.
* Typography scales properly for accessibility (uses Tailwind’s responsive classes).

---

© 2025 Delta Agency — Design · Marketing · Growth
