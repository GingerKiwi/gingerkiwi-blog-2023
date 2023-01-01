const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.from.JSDate(dateObj).toLocalString(DateTime.DATE_MED);
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}