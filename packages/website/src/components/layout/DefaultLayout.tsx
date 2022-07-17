import './DefaultLayout.less'

import { Col, Drawer, Layout, Row, Spin } from 'antd'
import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
import { generatePath, ScrollRestoration, useLocation } from 'react-router-dom'
import { AppContext } from 'src/components/app'
import { TopMenu } from 'src/components/menu/Navigation'
import { useTranslationsQuery, WebsiteComponent } from 'src/graphql'

import { useLocale } from '../app/I18n'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

const PageLoader: FC = () => (
  <Row style={{ margin: '0 auto', minHeight: 'calc(100vh - 256px)', height: '100%', width: '100%' }} align={'middle'} justify={'center'}>
    <Col span={24}>
      <Spin size={'small'} />
    </Col>
  </Row>
)

type ContentProps = ComponentPageContactUs | ComponentPageHome
const topNavigation = [
  { id: 'home', url: generatePath('/') },
  { id: 'about', url: generatePath('/about') },
  { id: 'posts', url: generatePath('/posts') },
  { id: 'contacts', url: generatePath('/contacts') },
]

const DefaultLayout: FC = () => {
  const { locale } = useLocale()

  const { pathname } = useLocation()
  const { data } = useTranslationsQuery({ variables: { locale } })
  const menu: Maybe<EntryFragment>[] = data?.translation?.data?.attributes?.entry.filter(it => it?.key?.startsWith('top-navigation.')) ?? []
  const header: Maybe<EntryFragment>[] = data?.translation?.data?.attributes?.entry.filter(it => it?.key?.startsWith('header.')) ?? []

  return (
    <AppContext.Consumer>
      {({ burger: { opened, toggle } }) => (
        <Layout>
          <Layout.Header style={{ lineHeight: 'unset', height: 'unset' }}>
            <Content>
              <Header data={header} />
            </Content>
          </Layout.Header>
          <Row justify={'center'} align={'middle'} style={{ background: '#fff' }}>
            <Col span={24}>
              <Content centered={false}>
                <Row justify={'space-between'} align={'middle'}>
                  <Col span={24}>
                    <TopMenu
                      data={topNavigation?.map(it => ({
                        ...it,
                        title: menu.find(entry => entry?.key === `top-navigation.${it.id}`)?.value ?? ' ',
                      }))}
                    />
                  </Col>
                </Row>
              </Content>
            </Col>
          </Row>
          <Layout.Content>
            <WebsiteComponent variables={{ locale }}>
              {({ data }) => {
                function filterByPathname<T extends ContentProps>(data: T[] = []): T | null {
                  return (data.find(it => it?.pathname === pathname) ?? null) as T
                }

                return (
                  <Suspense fallback={<PageLoader />}>
                    <Outlet context={filterByPathname(data?.website?.data?.attributes?.content as ContentProps[])} />
                  </Suspense>
                )
              }}
            </WebsiteComponent>
          </Layout.Content>
          <Layout.Footer>
            <Content style={{ padding: '40px 24px' }} centered={false}>
              <Footer data={header} />
            </Content>
          </Layout.Footer>
          <Drawer width={'50%'} height={'100%'} onClose={toggle} visible={opened} />
          <ScrollRestoration />
        </Layout>
      )}
    </AppContext.Consumer>
  )
}

export { DefaultLayout }
