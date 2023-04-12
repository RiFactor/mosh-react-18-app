# React 18

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
