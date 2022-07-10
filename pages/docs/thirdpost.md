---
title: What is Markdoc?
description: this is the first post
date: '2022-03-01'
tags: 
  - 'JavaScript'
  - 'Markdoc'
---
投稿日：{% toLocaleDateJP($markdoc.frontmatter.date) %}  
{% tagGroup items=$markdoc.frontmatter.tags / %}
# {% $markdoc.frontmatter.title %}

Markdoc is a [Markdown](https://commonmark.org)-based syntax and toolchain for creating custom documentation sites and experiences.  
We designed Markdoc to power [Stripe's public docs](http://stripe.com/docs), our largest and most complex content site.

## Installation

To get started with Markdoc, first install the library:

```shell
npm install @markdoc/markdoc
```

or

```shell
yarn add @markdoc/markdoc
```

and import it in your app:

```js
const Markdoc = require('@markdoc/markdoc');
```

or if you are using ESM

```js
import Markdoc from '@markdoc/markdoc';
```

then use `Markdoc` in your app or tool:

```js
const doc = `
# Markdoc README

{% image src="/logo.svg" /%}
`;

const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast);
return Markdoc.renderers.react(content, React);
```

Check out [our docs](https://markdoc.dev/docs) for more guidance on how to use Markdoc.

## Contributing

Contributions and feedback are welcome and encouraged. Check out our [contributing guidelines](.github/CONTRIBUTING.md) on how to do so.

### Development

1. Run `npm install`
1. Run `npm run build`
1. Run the tests using `npm test`

## Code of conduct

This project has adopted the Stripe [Code of conduct](.github/CODE_OF_CONDUCT.md).

## License

This project uses the [MIT license](LICENSE).

## Credits

Special shout out to:

- [@marcioAlmada](https://github.com/marcioAlmada) for providing us with the [@markdoc](https://github.com/markdoc) GitHub org.
- [@koomen](https://github.com/koomen) for gifting us https://markdoc.dev.