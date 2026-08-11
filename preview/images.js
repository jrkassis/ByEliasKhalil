window.SITE_IMAGES = {
  /* —— Home —— */
  homeHero: "../images/new_images/WhatsApp Image 2026-07-22 at 4.02.47 PM (1).jpeg",
  featuredDesertBloom: "../images/desert.jpeg",
  featuredMurexGala: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.01 PM (1).jpeg",
  featuredAegeanVows: "../images/815f2bde-7a20-4b47-be42-431902d7f16b.jpeg",
  featuredAtelierRunway: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.04 PM.jpeg",
  sampleCoastalCeremony: "../images/5cf975cc-982c-478f-a9d3-0437dcf31d58.jpeg",
  samplePrivateDining: "../images/WhatsApp Image 2026-07-17 at 9.30.16 AM (1).jpeg",
  sampleRoyalCelebration: "../images/1e302008-253e-476e-a6b4-39c5b6f11aeb1.jpeg",
  sampleMidnightBall: "../images/e111c2f6-8e7f-42ed-842a-43925cdadce71.jpeg",
  sampleAtelierDetails: "../images/79bb31d7-290b-4636-9419-04408f3868f5.jpeg",
  sampleTerraceSoiree: "../images/WhatsApp Image 2026-07-17 at 9.24.37 AM1.jpeg",
  converseCta: "../images/ABD_3723.webp",

  /* —— Portfolio page —— */
  portfolioHero: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.00 PM.jpeg",
  portfolioLumiereLaunch: "../images/WhatsApp Image 2026-07-17 at 9.24.39 AM (2).jpeg",
  portfolioCouturePresentation: "../images/56b78121-fafc-4f4b-bf84-00ba4c2886f7.jpeg",
  portfolioMaisonReveal: "../images/ab6228be-e289-4dc4-8990-ea8510e24575.jpeg",

  /* —— About page —— */
  aboutHero: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.06 PM.jpeg",
  aboutPortrait: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.07 PM.jpeg",

  /* —— Contact page —— */
  contactVisual: "../images/WhatsApp Image 2026-07-17 at 9.24.34 AM (1)1.jpeg",

  /* —— Careers page —— */
  careersHero: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.09 PM.jpeg",
  careersVisual: "../images/new_images/WhatsApp Image 2026-08-01 at 5.50.10 PM.jpeg",
};

/* Applies SITE_IMAGES to every <img data-image="key"> on the page */
(function applySiteImages() {
  const map = window.SITE_IMAGES || {};
  document.querySelectorAll("img[data-image]").forEach((img) => {
    const key = img.getAttribute("data-image");
    if (key && map[key]) {
      img.src = map[key];
    }
  });
})();
