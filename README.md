# Nextjs App Directory Template

### setting

```bash
pnpm install
```

```bash
pnpm husky install
```

### データ fetch をする場合は MSW を install してください。

```bash
pnpm add -D msw

# and

pnpm add -D msw-storybook-addon

# next

npx msw init public/
```

.storybook/main.ts に以下を追加してください。

```ts
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
```

pacakge.json に以下を追加してください。

```json
  "msw": {
    "workerDirectory": "public"
  }
```

### storybook を起動する場合は以下を実行してください。

```bash
pnpm sb
```

### テストを実行する場合は以下を実行してください。

```bash
pnpm test
```

### nextjs を起動する場合は以下を実行してください。

```bash
pnpm dev
```
