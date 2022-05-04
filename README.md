<h1 align="center">Highlighter</h1>

<p align="center">A complete rich text editor based on Slate framework with extended 'Highlighting' functionality.</p>

<p align="center">
  <img src="https://i.imgur.com/y2jglBF.png" />
</P>

## Packages

Highlighter is a monorepo managed with [Lerna](https://lerna.js.org/).
It is separated into two packages, which are:

| **Package**                                                 | **Description**                                                 | **Status**               |
| ----------------------------------------------------------- | --------------------------------------------------------------- | ------------------------ |
| [`highlighter-component`](./packages/highlighter-component) | Rich text editor with out of box modules and toolbar components | `Substantially Complete` |
| [`highlighter-core`](./packages/highlighter-core)           | Provides main highlighter functionalities                       | `In Progress`            |

### highlighter-component built-in modules

| **Module Name** | **Module Type** | **Toolbar Type** | **Status**    |
| --------------- | --------------- | ---------------- | ------------- |
| Paragraph       | Element         | Block Toolbar    | `Supported`   |
| List            | Element         | Block Toolbar    | `Supported`   |
| Heading         | Element         | Block Toolbar    | `Supported`   |
| Divider         | Element         | Block Toolbar    | `Unsupported` |
| Link            | Element         | Float Toolbar    | `Supported`   |
| Bold            | Mark            | Float Toolbar    | `Supported`   |
| Italic          | Mark            | Float Toolbar    | `Supported`   |
| Underline       | Mark            | Float Toolbar    | `Supported`   |

## Demo

Check out the demo by the following setup instructions:

> Clone the repo

```bash
git clone git@github.com:Yan-Boogie/highlighter.git
```

> Install package dependencies

```bash
yarn
```

> Build packages

```bash
yarn build:rollup
```

> Run Next project in split terminal

```bash
yarn start
```

> Open website

```bash
yarn open
```

## TODO List

- [ ] click-away feature
- [ ] link element feature
- [ ] Divider element feature
