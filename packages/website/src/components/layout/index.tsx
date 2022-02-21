import { lazy, Suspense } from 'react'
import { LocaleProvider } from 'src/components/app'
export { Content } from './Content'

const DefaultLayout = lazy(() => import('./DefaultLayout'))

const Layout = () => {
  return (
    <LocaleProvider>
      <Suspense fallback={null}>
        <DefaultLayout />
      </Suspense>
    </LocaleProvider>
  )
}

export { Layout as default }
