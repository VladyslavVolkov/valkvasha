import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ConfigProvider } from 'antd'
import { createContext, Dispatch, FC, SetStateAction, useContext, VFC } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { useLocalStorage, useToggle } from 'react-use'
import Pages from 'src/pages'
import './index.less'

type Locale = Scalars['I18NLocaleCode']

type AppProps = {
  i18n: { locale: Locale; setLocale: Dispatch<SetStateAction<Locale | undefined>> }
  burger: { opened: boolean; toggle: VoidFunction }
}

const defaultValue: AppProps = {
  i18n: { locale: 'ru', setLocale: () => undefined },
  burger: { opened: false, toggle: () => undefined },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC = ({ children }) => {
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
  queryDeduplication: true,
  connectToDevTools: import.meta.env.DEV,
  cache: new InMemoryCache({ resultCaching: import.meta.env.PROD }),
})

const LocaleProvider: FC = ({ children }) => {
  const {
    i18n: { locale },
  } = useApp()
  return (
    <IntlProvider defaultLocale={defaultValue.i18n.locale} locale={locale}>
      <ConfigProvider space={{ size: 'large' }} componentSize={'large'} locale={{ locale }}>
        {children}
      </ConfigProvider>
    </IntlProvider>
  )
}

const App: VFC = () => (
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
