/* Home page — moderate GSAP scroll motion beyond the hero.
   Deliberately restrained: no pointer-parallax, no full per-section
   choreography (that's reserved for the hero). Just enough to feel
   premium — a handful of chosen moments layered on top of the CSS-only
   reveal system that already works with no JS at all:
     - a restrained rise-and-fade on the four big section headings
     - stats band count-up
     - Our World orbit "assembling" itself on scroll-in
     - a light scroll-parallax drift on the Converse CTA band
   If GSAP fails to load, every element it would have touched is left at
   its normal CSS-visible state — nothing depends on this file to render.

   Deliberately NOT using SplitText here: splitting a heading into one
   <div> per word restructures the DOM and can shift its line-wrap/height
   the instant it runs. That's exactly the kind of layout change that
   invalidates every ScrollTrigger positioned below it on the page, and
   was traced to a scroll-speed/jump bug in the Featured Work and
   Portfolio sections. A plain whole-element tween carries none of that
   risk. */

(function () {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    /* —— Headings: simple rise + fade, no DOM restructuring —— */
    const headings = document.querySelectorAll(
      ".section-head h2, .world-title, .presence-intro h2"
    );

    gsap.set(headings, { autoAlpha: 0, y: 16 });
    headings.forEach((heading) => {
      gsap.to(heading, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: heading, start: "top 85%", once: true },
      });
    });

    /* —— Stats count-up —— */
    document.querySelectorAll(".stat-num").forEach((el) => {
      const match = el.textContent.trim().match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = match[2] || "";
      const counter = { value: 0 };

      el.textContent = "0" + suffix;

      gsap.to(counter, {
        value: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(counter.value) + suffix;
        },
        onComplete: () => {
          el.textContent = target + suffix;
        },
      });
    });

    /* —— Our World: orbit assembles on scroll-in —— */
    const orbitMap = document.querySelector(".orbit-map");
    if (orbitMap) {
      const rings = orbitMap.querySelectorAll(".orbit-ring");
      const core = orbitMap.querySelector(".orbit-core");
      const travel = orbitMap.querySelectorAll(".orbit-travel");
      const dests = orbitMap.querySelectorAll(".dest");

      /* .orbit-ring already runs a continuous CSS opacity animation
         (orbitBreath) — animating opacity/autoAlpha on it here would fight
         that keyframe every frame, so the entrance only ever tweens scale
         and leaves opacity entirely owned by the CSS animation. */
      gsap.set(rings, { scale: 0.82, transformOrigin: "center" });
      gsap.set(core, { autoAlpha: 0, scale: 0.7, transformOrigin: "center" });
      gsap.set(travel, { autoAlpha: 0 });
      gsap.set(dests, { autoAlpha: 0, y: 10 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: orbitMap, start: "top 75%", once: true },
      });

      tl.to(rings, { scale: 1, duration: 1.1, stagger: 0.12 })
        .to(core, { autoAlpha: 1, scale: 1, duration: 0.9 }, "-=0.7")
        .to(travel, { autoAlpha: 1, duration: 0.6 }, "-=0.4")
        .to(dests, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.5");
    }

    /* —— Converse CTA: light scroll parallax on the media wrapper
       (not the img — the img already runs its own Ken Burns keyframe
       animation, and layering a second transform tween on the same
       element would fight it). —— */
    const converseMedia = document.querySelector(".converse-media");
    if (converseMedia) {
      gsap.fromTo(
        converseMedia,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: ".converse",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  });

  /* Defensive final refresh once every image has actually loaded —
     images affect layout height in a couple of places, and any drift
     between ScrollTrigger's cached positions and real layout is exactly
     what caused the scroll-jump bug this file used to have. Cheap and
     safe to call once. */
  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
