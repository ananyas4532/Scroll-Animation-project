 Scroll-Driven Hero Section (React + GSAP + Tailwind)

An interactive **scroll-driven hero section** built using **React, GSAP ScrollTrigger, and Tailwind CSS**.
This project features horizontal scrolling cards, floating animations, and responsive design for both desktop and mobile devices.

 Features

*  Scroll-based horizontal animation
*  Fully responsive (mobile + desktop)
*  Glassmorphism card UI
*  Smooth GSAP ScrollTrigger animation
*  Gradient backgrounds
*  Floating & rotating card effects
*  Scroll indicator animation
*  Performance optimized

---

## Tech Stack

* React
* GSAP (ScrollTrigger)
* Tailwind CSS
* Vite / CRA (depending on your setup)

---

## Project Structure

```
src/
 ├── components/
 │    └── HeroSection.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/your-username/scroll-hero-gsap.git
```

Navigate into project:

```bash
cd scroll-hero-gsap
```

Install dependencies:

```bash
npm install
```

Install GSAP:

```bash
npm install gsap
```

---

##  Run Project

```bash
npm run dev
```

Project will run at:

```
http://localhost:5173
```

---

## How It Works

* The section is **pinned** using GSAP ScrollTrigger
* Cards move **horizontally on vertical scroll**
* Each card has:

  * floating animation
  * rotation animation
  * scale animation
* Scroll popup disappears on scroll
* Final text fades in at end

---

##  Responsive Design

The layout adapts for:

* Mobile phones
* Tablets
* Laptops
* Large screens

Key responsive elements:

* Card size scaling
* Dynamic scroll width
* Responsive typography
* Overflow handling

---

##  UI Preview

* Glassmorphism cards
* Gradient background
* Glow effects
* Floating motion
* Smooth transitions

---

##  Key GSAP Features Used

* ScrollTrigger pinning
* Container animation
* scrub animations
* stagger floating motion
* random rotation
* reveal animation

---

##  Customization

You can easily modify:

### Card Data

```js
const cardData = [
  { value: "10K+", label: "Active Users" },
  { value: "500+", label: "Deployments" }
];
```

### Colors

```js
const Colors = [
  "bg-gradient-to-br from-[#063d33] to-[#021f19]"
];
```

---

##  Future Improvements

* Snap scrolling
* Auto center active card
* Touch swipe support
* Dark/light theme toggle
* Performance optimization

---

## Author

**Ananya Singh**
Frontend Developer | React | GSAP | UI/UX

---

## If you like this project

Give it a ⭐ on GitHub and share!

---

## License

This project is open source and available under the MIT License.
