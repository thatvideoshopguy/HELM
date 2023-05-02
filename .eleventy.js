// .eleventy.js
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-attrs");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor);

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPairedShortcode("mytag", function (content) {
    const boxTemplate = fs.readFileSync(
      path.join(__dirname, "src/_includes/box.njk"),
      "utf8"
    );
    const rendered = this.render(boxTemplate, { content });
    return rendered;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
