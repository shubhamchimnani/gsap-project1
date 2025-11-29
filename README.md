# GSAP Animation Portfolio – Francesco Gioia

This project is a modern, animated portfolio page built using **HTML**, **CSS**, and **GSAP (GreenSock Animation Platform)**.  
It features smooth entrance animations, layered images, and a clean footer that slides up from the bottom.

---

## 🚀 Features

### ✨ GSAP Animations
- Navbar slides from top.
- Headings animate from left.
- Images come in with rotation and fade effect.
- Footer rises from the bottom with a smooth transition.

### 🎨 Modern Layout
- Minimal, typography-focused design.
- Large bold headings.
- Layered portrait photographs with subtle rotation.

### 📱 Responsive Basics
- Uses scalable text and flexible layout containers.
- Works on all major modern browsers.

---

## 📂 Project Structure

---

## 🧩 Technologies Used

- **HTML5**  
- **CSS3**  
- **GSAP 3 (Tween, Timeline)**  
- **GSAP ScrollTrigger** (optional)

---

## 🛠️ Setup & Usage

1. Clone the project:
   ```bash
   git clone https://github.com/your-repo/project.git

##GSAP Animation Timeline Example
var tl = gsap.timeline();

tl.from(".nav h2, .nav p", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.2,
});

tl.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4
});

tl.from("#main img", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    rotate: 45
});

tl.from(".footer", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


