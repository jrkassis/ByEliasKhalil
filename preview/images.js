window.SITE_IMAGES = {
  /* —— Home —— */
  homeHero: "../images/hero-image.jpeg",
  featuredDesertBloom: "../images/desert.jpeg",
  featuredMurexGala: "../images/138c382f-a8ea-4526-a968-2d0106d5f1db.jpeg",
  featuredAegeanVows: "../images/815f2bde-7a20-4b47-be42-431902d7f16b.jpeg",
  featuredAtelierRunway: "../images/4bfec9c6-c256-421c-90b1-a5181f58d971.jpeg",
  sampleCoastalCeremony: "../images/5cf975cc-982c-478f-a9d3-0437dcf31d58.jpeg",
  samplePrivateDining: "../images/WhatsApp Image 2026-07-17 at 9.30.16 AM (1).jpeg",
  sampleRoyalCelebration: "../images/1e302008-253e-476e-a6b4-39c5b6f11aeb1.jpeg",
  sampleMidnightBall: "../images/e111c2f6-8e7f-42ed-842a-43925cdadce71.jpeg",
  sampleAtelierDetails: "../images/79bb31d7-290b-4636-9419-04408f3868f5.jpeg",
  sampleTerraceSoiree: "../images/WhatsApp Image 2026-07-17 at 9.24.37 AM1.jpeg",
  converseCta: "../images/ABD_3723.webp",

  /* —— Portfolio page —— */
  portfolioHero: "../images/WhatsApp Image 2026-07-17 at 9.25.00 AM (1)1.jpeg",
  portfolioLumiereLaunch: "../images/WhatsApp Image 2026-07-17 at 9.24.39 AM (2).jpeg",
  portfolioCouturePresentation: "../images/56b78121-fafc-4f4b-bf84-00ba4c2886f7.jpeg",
  portfolioMaisonReveal: "../images/ab6228be-e289-4dc4-8990-ea8510e24575.jpeg",

  /* —— About page —— */
  aboutHero: "../images/hero-image1.jpeg",
  aboutPortrait: "../images/0daeecb0-8efb-4a78-ad8a-b7ee817c6c45(1).jpeg",

  /* —— Contact page —— */
  contactVisual: "../images/WhatsApp Image 2026-07-17 at 9.24.34 AM (1)1.jpeg",
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
