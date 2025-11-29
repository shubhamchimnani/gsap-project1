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

/* FOOTER ANIMATION — comes from bottom */
tl.from(".footer", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.4
});
