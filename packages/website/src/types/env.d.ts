interface AppEnv extends ImportMetaEnv {
  readonly WEBSITE_API_TOKEN: string
  readonly WEBSITE_API_URL: string
}

interface ImportMeta {
  readonly env: AppEnv
}
