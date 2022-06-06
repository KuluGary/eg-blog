const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED));
  eleventyConfig.addNunjucksGlobal("getYear", () => new Date().getFullYear());

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Gary's blog",
    description: "Gary Cuétara's Tech Blog.",
    url: "https://kulugary.netlify.app/",
    author: "Gary Cuétara",
    twitter: "kulugary",
    image: "./assets/hat.jpg",
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
