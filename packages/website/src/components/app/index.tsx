import './index.less'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ConfigProvider } from 'antd'
import {createContext, Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, useContext, useEffect, useState, VFC} from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { useLocalStorage, useToggle } from 'react-use'
import {useTranslationsQuery} from "src/graphql";
import Pages from 'src/pages'

type Locale = Scalars['I18NLocaleCode']

type AppProps = {
  i18n: { locale: Locale; setLocale: Dispatch<SetStateAction<Locale | undefined>> }
  burger: { opened: boolean; toggle: VoidFunction }
}

const defaultValue: AppProps = {
  i18n: { locale: 'uk', setLocale: () => undefined },
  burger: { opened: false, toggle: () => undefined },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({ children }) => {
  const [locale, setLocale] = useLocalStorage<Locale>('locale', defaultValue.i18n.locale)
  const [opened, toggle] = useToggle(false)

  return (
    <Context.Provider
      value={{
        ...defaultValue,
        i18n: { locale: locale ?? defaultValue.i18n.locale, setLocale },
        burger: { opened, toggle },
      }}
    >
      {children}
    </Context.Provider>
  )
}

const client = new ApolloClient({
  uri: '/graphql',
  connectToDevTools: import.meta.env.DEV,
  cache: new InMemoryCache({ }),
})

const LocaleProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({ children }) => {
  const {
    i18n: { locale },
  } = useApp()
  const {data} = useTranslationsQuery({variables:{locale}})
  const [messages, setMessages] = useState({})
  useEffect(()=> {setMessages(data?.translation?.data?.attributes?.entry?.reduce((all, one) => ({ ...all, ...(one ? { [one.key as string] : one.value } : {}) }), {}) ?? {})}, [data,locale])
  return (
    <IntlProvider defaultLocale={defaultValue.i18n.locale} locale={locale} messages={messages}>
      <ConfigProvider space={{ size: 'large' }} componentSize={'large'} locale={{ locale }}>
        {children}
      </ConfigProvider>
    </IntlProvider>
  )
}

const App: FC = () => (
  <ApolloProvider client={client}>
    <ContextProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ContextProvider>
  </ApolloProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, useApp, LocaleProvider, Context as AppContext }
