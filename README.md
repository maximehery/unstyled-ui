![Banner](assets/banner.svg)

# @op-ent/unstyled-ui

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![MIT License][license-src]][license-href]

`@op-ent/unstyled-ui` is an headless react library.

## Usage

Install package:

```sh
# npm
npm install @op-ent/unstyled-ui

# yarn
yarn install @op-ent/unstyled-ui

# pnpm
pnpm install @op-ent/unstyled-ui
```

Import:

```js
// ESM
import { Button } from '@op-ent/unstyled-ui'

// CommonJS
const { Button } = require('@op-ent/unstyled-ui')
```

## Planned components & features

> WARNING: This is a work in progress.
>
> -   This list is not complete and may change at any time.
> -   Names may change in the future.

-   [ ] Button _(WIP)_
-   [ ] ButtonGroup
-   [ ] Dropdown
-   [ ] Select
-   [ ] Combobox
-   [ ] Switch
-   [ ] Accordion
-   [ ] Modal
-   [ ] Popover
-   [ ] RadioGroup
-   [ ] Tabs
-   [ ] Checkbox
-   [ ] ContextMenu (Radix)
-   [ ] Progress
-   [ ] Slider
-   [ ] Toast & Notifications management (React Hot Toast)
-   [ ] Tooltip

## API Reference

### Utilities

#### `generateClassName` (internal)

Based on `clsx`, it generates a class name based on a list of class names, the default className prop and the `unstyled` condition.

```ts
const classes = generateClassName('foo', 'bar')(true) // "foo bar"
const classes = generateClassName('foo', 'bar')(false) // "foo"
```

## 💻 Development

-   Clone this repository
-   Install dependencies using `yarn install`
-   Watch files in development using `yarn dev`
-   Run interactive tests using `yarn test`

## Inspiration

-   [Material Tailwind](https://github.com/creativetimofficial/material-tailwind)

## License

Published under [MIT License](./LICENSE).

---

Made with ❤️ by [Florian LEFEBVRE](https://github.com/florian-lefebvre) in France.

<!-- Badges -->
<!-- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -->

[npm-version-src]: https://img.shields.io/npm/v/@op-ent/unstyled-ui?style=flat-square
[npm-version-href]: https://npmjs.com/package/@op-ent/unstyled-ui
[npm-downloads-src]: https://img.shields.io/npm/dm/@op-ent/unstyled-ui?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@op-ent/unstyled-ui
[github-actions-src]: https://img.shields.io/github/workflow/status/op-ent/unstyled-ui/ci/main?style=flat-square
[github-actions-href]: https://github.com/op-ent/unstyled-ui/actions?query=workflow%3Aci
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@op-ent/unstyled-ui?style=flat-square
[bundle-href]: https://bundlephobia.com/result?p=@op-ent/unstyled-ui
[codecov-src]: https://img.shields.io/codecov/c/gh/op-ent/unstyled-ui/main?style=flat-square
[codecov-href]: https://codecov.io/gh/op-ent/unstyled-ui
[license-src]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-href]: ./LICENSE
