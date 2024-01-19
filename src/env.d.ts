/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PRERENDER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
