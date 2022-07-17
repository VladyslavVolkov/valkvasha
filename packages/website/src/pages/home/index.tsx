import { Avatar, Card, Col, List, Row, Space, Typography } from 'antd'
import { FC } from 'react'
import Markdown from 'react-markdown'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { useLocale } from 'src/components/app/I18n'
import { Content } from 'src/components/layout'
import { Headline, Hero } from 'src/components/section'
import { PostsComponent, ServicesComponent } from 'src/graphql'

const Home: FC = () => {
  const { locale } = useLocale()
  const props = useOutletContext<HomeFragment>()
  const navigate = useNavigate()
  return (
    <Space style={{ width: '100%' }} direction={'vertical'} size={40}>
      <Hero {...props?.section1} />
      <Content>
        {props?.section2?.map(it => (
          <Headline key={it?.id} {...it} />
        ))}
      </Content>
      <Content>
        <List
          split={false}
          size={'large'}
          grid={{ column: 4, xs: 1, sm: 1, md: 2, lg: 2, xl: 4 }}
          itemLayout={'horizontal'}
          dataSource={props?.section3 ?? []}
          renderItem={it => (
            <List.Item key={it?.id}>
              <Card
                bordered={false}
                cover={
                  <Row style={{ padding: 24 }} align={'middle'} justify={'center'}>
                    <Col>
                      <Avatar src={it?.media?.data?.attributes?.url} size={96} shape={'square'} />
                    </Col>
                  </Row>
                }
              >
                <Card.Meta
                  style={{ height: 240 }}
                  title={<Typography.Title level={5}>{it?.title}</Typography.Title>}
                  description={<Markdown>{it?.description ?? ''}</Markdown>}
                />
              </Card>
            </List.Item>
          )}
        />
      </Content>
      <Content>
        <ServicesComponent variables={{ locale }}>
          {({ data, loading }) => (
            <List
              split={false}
              header={<Headline title={props?.section4?.title} />}
              loading={loading}
              size={'large'}
              grid={{ column: 3, xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
              itemLayout={'horizontal'}
              dataSource={data?.services?.data ?? []}
              renderItem={it => (
                <List.Item key={it?.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/services/${it?.attributes?.slug}`)}>
                  <Card bordered={false} cover={<img alt={it?.attributes?.name ?? ''} src={it?.attributes?.cover?.data?.attributes?.url} />}>
                    <Card.Meta title={<Typography.Title level={5}>{it?.attributes?.name}</Typography.Title>} />
                  </Card>
                </List.Item>
              )}
            />
          )}
        </ServicesComponent>
      </Content>
      <Content>
        {props?.section5?.map(it => (
          <Headline key={it?.id} {...it} />
        ))}
      </Content>
      <Content centered={false}>
        <PostsComponent variables={{ pagination: { limit: 3 }, locale, sort: ['id:DESC'] }}>
          {({ data, loading }) => (
            <List
              header={<Headline title={props?.section6?.title} />}
              loading={loading}
              size={'large'}
              grid={{ column: 3, xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
              itemLayout={'horizontal'}
              dataSource={data?.posts?.data}
              renderItem={it => (
                <List.Item key={it?.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/posts/${it?.attributes?.slug}`)}>
                  <Card
                    bordered={false}
                    cover={
                      <img
                        style={{ objectFit: 'cover', objectPosition: 'top center', height: '320px' }}
                        alt={it?.attributes?.name ?? ''}
                        src={it?.attributes?.cover?.data?.attributes?.url}
                      />
                    }
                  >
                    <Card.Meta
                      title={<Typography.Title level={5}>{it.attributes?.name}</Typography.Title>}
                      description={<Markdown>{it?.attributes?.teaser ?? ''}</Markdown>}
                    />
                  </Card>
                </List.Item>
              )}
            />
          )}
        </PostsComponent>
      </Content>
    </Space>
  )
}

export { Home as default }
