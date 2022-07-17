import { Typography } from 'antd'
import { FC } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useLocale } from 'src/components/app/I18n'
import { Content } from 'src/components/layout'
import { Page } from 'src/components/page'
import { usePostsQuery } from 'src/graphql'

const Post: FC = () => {
  const { locale } = useLocale()
  const { slug } = useParams()
  const { data } = usePostsQuery({
    variables: {
      pagination: { limit: 1 },
      locale,
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
    },
  })
  const post = data?.posts?.data?.[0]?.attributes

  return (
    <Page>
      <Content style={{ padding: 24 }} centered={false}>
        <Typography.Title level={1}>{post?.name}</Typography.Title>
        {post?.content && <Markdown>{post?.content}</Markdown>}
      </Content>
    </Page>
  )
}

export { Post as default }
