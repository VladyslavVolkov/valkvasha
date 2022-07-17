import { ConfigProvider } from 'antd'
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useLocalStorage } from 'react-use'
import { useTranslationsQuery } from 'src/graphql'
import ukUA from 'antd/es/locale/uk_UA'
import ruRU from 'antd/es/locale/ru_RU'

type Locale = Scalars['I18NLocaleCode']
type ContextProps = { isDefault: boolean; locale: Locale; setLocale: Dispatch<SetStateAction<Locale | undefined>> }
const defaultValue: ContextProps = { locale: 'uk', setLocale: () => undefined, isDefault: true } as const
const LocaleContext = createContext<ContextProps>(defaultValue)

const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useLocalStorage<Locale>('locale', defaultValue.locale)
  const { data } = useTranslationsQuery()
  const [messages, setMessages] = useState<Record<string, string>>()
  useEffect(() => {
    locale &&
      data?.translation?.data?.attributes &&
      setMessages(
        (locale === defaultValue.locale
          ? data?.translation?.data?.attributes?.entry
          : data?.translation?.data?.attributes?.localizations?.data?.find(it => it.attributes?.locale === locale)?.attributes?.entry
        )?.reduce((all, one) => ({ ...all, ...(one ? { [one.key as string]: one.value } : {}) }), {}) ?? {},
      )
  }, [data?.translation?.data?.attributes, locale])
  if (!locale || !messages) return null

  return (
    <LocaleContext.Provider value={{ locale: locale ?? defaultValue.locale, setLocale, isDefault: locale === defaultValue.locale }}>
      <IntlProvider defaultLocale={defaultValue.locale} locale={locale ?? defaultValue.locale} messages={messages}>
        <ConfigProvider space={{ size: 'large' }} componentSize={'large'} locale={locale === 'uk' ? ukUA : ruRU}>
          {children}
        </ConfigProvider>
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

const useLocale = () => useContext(LocaleContext)

export { I18nProvider, useLocale }
