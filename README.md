# React 18

> _QUESTION -- members of an object are properties or methods (functions) ? correct terminology?_

<br/>

## Terminology

- hot module replacement (hmr)
- Immuatable - unchangeable

  - Mutate - change
  - Mutable - changeable
    <br/>

  React - JS library for creating dyamic + interactive UI

  - Library [tool]: Tool providing specific fn-ality

- Framework [toolset] (Vue / Angular)
  - Set of tools & guidelines for building apps
- Other Libraries
  - Routing (React Router?)
  - HTTP calls
  - Managing App State (Redux)
  - Internationalistation
  - Form Validation
  - Animations

<br/>

## Resources

[Babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwCwjAfAEgpgNnA9gAgOqIE5wCbAPTgRA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.21.4&externalPlugins=&assumptions=%7B%7D)

[**Markdown Best Practise**](https://www.markdownguide.org/basic-syntax#headings)
<br/>

React Dev Tools (Chrome Extension) > Components > View Source for this element / Inspect the matching DOM element
<br/>

### Principles

Separation of Concerns <br/>
_Styles / markup / logic can be in a single file_ <br/>
Specific functionality should be divided into distinct functional areas

- Modular
- Easier to
  - understand
  - maintain
  - modify

<br/>

## Get Started

Check scripts in _package.json_

```shell
yarn dev
```

OR

```shell
npm run dev // ?
```

### Vite config for absolute path

```shell
yarn add -D vite-tsconfig-paths
```

> vite.config.ts

```typescript
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
});
```

<br/>
