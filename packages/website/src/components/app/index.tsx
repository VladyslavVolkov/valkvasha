import { UIProvider } from '@bn-digital/antd'
import { ClientProvider } from '@bn-digital/graphql-client'
import { RoutingProvider } from '@bn-digital/react'
import I18nProvider from '@bn-digital/react-i18n'
import { createContext, Dispatch, FC, SetStateAction, useContext, useState, VFC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useLocalStorage, useToggle } from 'react-use'
import Pages from 'src/pages'
import './index.less'

type AppTheme = string | 'dark' | 'light' | 'default'

type Size = 'small' | 'middle' | 'large'

type AppProps = {
  i18n: { locale: string | undefined; setLocale: Dispatch<SetStateAction<string | undefined>> }
  burger: { opened: boolean; toggle: VoidFunction }
  ui: { theme: AppTheme; size: Size }
}

const defaultValue: AppProps = {
  i18n: { locale: 'ru', setLocale: () => undefined },
  burger: { opened: false, toggle: () => undefined },
  ui: { theme: 'default', size: 'large' },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC = ({ children }) => {
  const [locale, setLocale] = useLocalStorage<string>('locale', defaultValue.i18n.locale)
  const [opened, toggle] = useToggle(false)
  return <Context.Provider value={{ ...defaultValue, i18n: { locale, setLocale }, burger: { opened, toggle } }}>{children}</Context.Provider>
}

const App: VFC = () => (
  <ClientProvider production={import.meta.env.PROD}>
    <ContextProvider>
      <Context.Consumer>
        {({ i18n: { locale }, ui: { size } }) => (
          <I18nProvider locale={locale}>
            <UIProvider size={size} locale={locale}>
              <BrowserRouter>
                <Pages />
              </BrowserRouter>
            </UIProvider>
          </I18nProvider>
        )}
      </Context.Consumer>
    </ContextProvider>
  </ClientProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, useApp, Context as AppContext }
