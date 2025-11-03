module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("edcMeta", function(text) {
    return `<div class="edc-meta">${text}</div>`;
  });

  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
