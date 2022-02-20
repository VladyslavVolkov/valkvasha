import { Card, List } from 'antd'
import { FC } from 'react'
import { useApp } from 'src/components/app'
import { Content } from 'src/components/layout'
import { Page } from 'src/components/page'
import { PostsComponent } from 'src/graphql'

const Posts: FC = () => {
  const { i18n } = useApp()

  return (
    <Page>
      <Content>
        <PostsComponent variables={{ locale: i18n.locale }}>
          {({ data, loading }) => (
            <List
              loading={loading}
              size={'large'}
              grid={{ column: 2, xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
              itemLayout={'horizontal'}
              dataSource={data?.posts?.data ?? []}
              renderItem={it => (
                <List.Item key={it?.id}>
                  <Card bordered={false} cover={<img alt={it?.attributes?.name ?? ''} src={it?.attributes?.cover?.data?.attributes?.url} />}>
                    <Card.Meta title={it?.attributes?.name} />
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
