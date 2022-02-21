import { Typography } from 'antd'
import { FC } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Content } from 'src/components/layout'
import { Page } from 'src/components/page'
import { PostsComponent } from 'src/graphql'

const Post: FC = () => {
  const { i18n } = useApp()
  const { slug } = useParams()

  return (
    <Page>
      <PostsComponent
        variables={{
          pagination: { limit: 1 },
          locale: i18n.locale,
          filters: {
            or: [
              {
                localizations: { slug: { eq: slug } },
              },
              {
                slug: { eq: slug },
              },
            ],
          },
        }}
      >
        {({ data }) => {
          const post = data?.posts?.data?.[0]?.attributes
          return post ? (
            <Content centered={false}>
              <Typography.Title level={1}>{post.name}</Typography.Title>
              {post.content && <Markdown>{post?.content}</Markdown>}
            </Content>
          ) : null
        }}
      </PostsComponent>
    </Page>
  )
}

export { Post as default }
