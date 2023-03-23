const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPlugin(syntaxHighlight);

    // eleventyConfig.addPlugin is from: https://www.11ty.dev/docs/plugins/syntaxhighlight/
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}