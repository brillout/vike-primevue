```
pnpm install
pnpm run build
pnpm run server:prod
```

Then go to [localhost:3000](https://localhost:3000) and observe error:

```
Server running at http://localhost:3000
(node:25974) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
/home/rom/tmp/vike-primevue/node_modules/.pnpm/primevue@3.35.0_vue@3.3.4/node_modules/primevue/button/button.esm.js:1
import Badge from 'primevue/badge';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .js] (/home/rom/tmp/vike-primevue/node_modules/.pnpm/ts-node@10.9.1_@types+node@20.8.0_typescript@5.2.2/node_modules/ts-node/src/index.ts:1608:43)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
/home/rom/tmp/vike-primevue/node_modules/.pnpm/primevue@3.35.0_vue@3.3.4/node_modules/primevue/button/button.esm.js:1
import Badge from 'primevue/badge';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .js] (/home/rom/tmp/vike-primevue/node_modules/.pnpm/ts-node@10.9.1_@types+node@20.8.0_typescript@5.2.2/node_modules/ts-node/src/index.ts:1608:43)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
```

Note that it works in dev: I'm guessing Vite inconsistently adds `'primevue'` to `ssr.noExternal` in dev only.
