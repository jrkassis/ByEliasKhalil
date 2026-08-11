/* Universe hero — GSAP entrance, kinetic type, parallax, scroll depth.
   Progressive enhancement: the cosmic scene (nebula drift, star twinkle,
   orbit spin, comets) already runs on pure CSS keyframes in styles.css,
   so if this script or the GSAP CDN fails to load, the hero still renders
   as a fully composed, ambient-animated scene — this file only adds the
   choreographed entrance, kinetic text split, and pointer/scroll depth. */

(function () {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  /* On mobile, the browser chrome (address bar) hiding/showing as you
     scroll fires a 'resize' event that isn't a real viewport resize.
     ScrollTrigger's default behavior is to recalculate all trigger
     positions on resize, and doing that mid-scroll is what produces a
     sudden jump/fast-scroll feeling — this is GSAP's documented fix. */
  ScrollTrigger.config({ ignoreMobileResize: true });

  const hero = document.querySelector(".hero-universe");
  if (!hero) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      reduceMotion: "(prefers-reduced-motion: reduce)",
      finePointer: "(hover: hover) and (pointer: fine)",
    },
    (context) => {
      const { reduceMotion, finePointer } = context.conditions;

      const eyebrow = hero.querySelector(".eyebrow");
      const tagline = hero.querySelector(".tagline");
      const actions = hero.querySelector(".hero-actions");
      const portal = hero.querySelector(".portal");
      const brandEl = hero.querySelector(".brand-kinetic");

      if (reduceMotion) {
        return;
      }

      let split = null;
      if (brandEl) {
        split = SplitText.create(brandEl, { type: "chars, words" });
        gsap.set(split.chars, { autoAlpha: 0, yPercent: 120, rotate: 4 });
      }

      /* Hide immediately (no FOUC) — the preloader masks this; the actual
         reveal timeline waits for "preloader:done" so the entrance plays
         out in view instead of finishing behind the preloader unseen. */
      gsap.set(portal, { autoAlpha: 0, scale: 0.86, xPercent: 5 });
      gsap.set([eyebrow, tagline, actions], { autoAlpha: 0, y: 14 });

      const playEntrance = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });

        tl.to(portal, { autoAlpha: 1, scale: 1, xPercent: 0, duration: 1.5, ease: "power4.out" }, 0.1)
          .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.35);

        if (split) {
          tl.to(
            split.chars,
            {
              autoAlpha: 1,
              yPercent: 0,
              rotate: 0,
              duration: 0.9,
              stagger: { each: 0.02, from: "start" },
            },
            0.55
          );
        }

        tl.to(tagline, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.55").to(
          actions,
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.5"
        );
      };

      if (document.body.classList.contains("is-loading")) {
        window.addEventListener("preloader:done", playEntrance, { once: true });
      } else {
        playEntrance();
      }

      /* Ambient glow pulse on the orbiting destination markers */
      gsap.to(hero.querySelectorAll(".ring-body"), {
        scale: 1.7,
        transformOrigin: "center",
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5, from: "random" },
      });

      /* Pointer parallax across cosmic depth layers */
      if (finePointer) {
        const layers = [
          { el: hero.querySelector(".starfield-near"), amount: 16 },
          { el: hero.querySelector(".starfield-mid"), amount: 9 },
          { el: hero.querySelector(".orbit-system"), amount: 12 },
          { el: portal, amount: -10 },
        ].filter((layer) => layer.el);

        const xTo = layers.map((layer) =>
          gsap.quickTo(layer.el, "x", { duration: 0.9, ease: "power3.out" })
        );
        const yTo = layers.map((layer) =>
          gsap.quickTo(layer.el, "y", { duration: 0.9, ease: "power3.out" })
        );

        const onPointerMove = (event) => {
          const rect = hero.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          layers.forEach((layer, i) => {
            xTo[i](px * layer.amount);
            yTo[i](py * layer.amount);
          });
        };

        hero.addEventListener("pointermove", onPointerMove);
      }

      /* Scroll-scrubbed depth — layers drift apart as the hero exits */
      const scrollDefaults = {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };

      gsap.to(hero.querySelector(".starfield-far"), {
        yPercent: 14,
        ease: "none",
        scrollTrigger: scrollDefaults,
      });
      gsap.to(hero.querySelector(".starfield-mid"), {
        yPercent: 24,
        ease: "none",
        scrollTrigger: scrollDefaults,
      });
      gsap.to(hero.querySelector(".orbit-system"), {
        yPercent: 8,
        scale: 1.06,
        ease: "none",
        scrollTrigger: scrollDefaults,
      });
      /* fromTo with explicit values (not a plain .to()) — this tween is
         created immediately on load, before the entrance timeline has run,
         so a .to() would capture the portal's pre-entrance hidden state
         (autoAlpha:0 from the gsap.set above) as its implicit "from" and
         race the entrance: the moment the user scrolled even slightly, the
         portal would jump toward that stale 0 instead of fading from its
         actual on-screen state, making it disappear almost immediately. */
      gsap.fromTo(
        portal,
        { yPercent: 0, scale: 1, autoAlpha: 1 },
        {
          yPercent: -8,
          scale: 0.92,
          autoAlpha: 0.75,
          ease: "none",
          scrollTrigger: scrollDefaults,
        }
      );
      gsap.to(hero.querySelector(".hero-content"), {
        yPercent: -12,
        autoAlpha: 0.6,
        ease: "none",
        scrollTrigger: { ...scrollDefaults, end: "70% top" },
      });

      return () => {
        if (split) split.revert();
      };
    }
  );
})();
