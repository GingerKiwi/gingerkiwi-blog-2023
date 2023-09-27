const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addCollection('post', (collection) => {
        return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
    });

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