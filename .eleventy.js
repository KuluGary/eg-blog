const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED));  
  eleventyConfig.addNunjucksGlobal("getYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
