import './index.less'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createContext, Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, useContext } from 'react'
import { DataBrowserRouter } from 'react-router-dom'
import { useLocalStorage, useToggle } from 'react-use'
import { I18nProvider } from 'src/components/app/I18n'
import { default as introspection } from 'src/graphql'
import pages from 'src/pages'

type AppProps = {
  burger: { opened: boolean; toggle: VoidFunction }
}

const defaultValue: AppProps = {
  burger: { opened: false, toggle: () => undefined },
}

const Context = createContext<AppProps>(defaultValue)

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [opened, toggle] = useToggle(false)

  return (
    <Context.Provider
      value={{
        ...defaultValue,
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
  cache: new InMemoryCache({
    resultCaching: import.meta.env.PROD,
    possibleTypes: introspection.possibleTypes,
  }),
})

const App: FC = () => (
  <ApolloProvider client={client}>
    <ContextProvider>
      <I18nProvider>
        <DataBrowserRouter routes={pages} fallbackElement={null} />
      </I18nProvider>
    </ContextProvider>
  </ApolloProvider>
)

const useApp = () => useContext<AppProps>(Context)

export { App, Context as AppContext, useApp }
