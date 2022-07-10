const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options: https://markdoc.io/docs/nextjs#options */)({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx']
});