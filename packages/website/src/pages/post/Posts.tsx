import { Card, List, Typography } from 'antd'
import { FC } from 'react'
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import { useLocale } from 'src/components/app/I18n'
import { Content } from 'src/components/layout'
import { Page } from 'src/components/page'
import { PostsComponent } from 'src/graphql'

const Posts: FC = () => {
  const { locale } = useLocale()
  const navigate = useNavigate()
  return (
    <Page>
      <Content centered={false}>
        <PostsComponent variables={{ locale, pagination: { limit: 50 }, sort: ['id:DESC'] }}>
          {({ data, loading }) => (
            <List
              pagination={{ defaultPageSize: 9 }}
              loading={loading}
              size={'large'}
              grid={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
              itemLayout={'horizontal'}
              dataSource={data?.posts?.data ?? []}
              renderItem={it => (
                <List.Item key={it?.id} style={{ cursor: 'pointer' }} onClick={() => navigate(it?.attributes?.slug ?? '')}>
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
                      style={{ textAlign: 'justify' }}
                      title={<Typography.Title level={5}>{it?.attributes?.name}</Typography.Title>}
                      description={<Markdown>{it?.attributes?.teaser ?? ''}</Markdown>}
                    />
                  </Card>
                </List.Item>
              )}
            />
          )}
        </PostsComponent>
      </Content>
    </Page>
  )
}

export { Posts as default }
