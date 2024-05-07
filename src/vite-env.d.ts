/**
 * environment and modes detail more : https://vitejs.dev/guide/env-and-mode#intellisense-for-typescript
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_API_KEY: string;
  readonly VITE_APP_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
