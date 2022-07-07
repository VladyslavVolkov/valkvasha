declare module 'emoji-flags'
interface AppEnv extends ImportMetaEnv {
  readonly WEBSITE_API_TOKEN: string
  readonly WEBSITE_API_URL: string
}

interface ImportMeta {
  readonly env: AppEnv
}

type PayButton = {
  setMerchantId(id: number): void
  setAmount(amount: number, currency: string, status: boolean): void
  setResponseUrl(url: string): void
  setHost(url: string): void
  getUrl(): string
  addField(options: { label: string; name: string; required: boolean; readonly?: boolean })
}

declare const $ipsp: {
  get(selector: string): PayButton
}
