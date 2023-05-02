window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    processEnvironments: true,
  },
  svg: {
    fontCache: "global",
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: "tex2jax_process",
  },
};

// MathJax.Hub.Config({
//   mml2jax: { preview: ["[maths rendering]"] },
//   "fast-preview": { disabled: true },
//   explorer: { subtitle: true },
//   displayAlign: "center",
//   MatchWebFonts: {
//     matchFor: { "HTML-CSS": true, NativeMML: false, SVG: false },
//     fontCheckDelay: 2000,
//     fontCheckTimeout: 30 * 1000,
//   },
//   "HTML-CSS": {
//     preferredFont: "STIX",
//     availableFonts: ["STIX", "TeX"],
//     webFont: "STIX-Web",
//     linebreaks: { automatic: true, width: "90% container" },
//   },
//   SVG: {
//     font: "STIX-Web",
//     linebreaks: { automatic: false, width: "90% container" },
//   },
//   menuSettings: { collapsible: false, autocollapse: false, explorer: false },
// });
