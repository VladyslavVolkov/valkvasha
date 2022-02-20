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
      <Content>
        <PostsComponent variables={{ pagination: { limit: 1 }, locale: i18n.locale, filters: { slug: { eq: slug } } }}>
          {({ data }) => {
            const content = data?.posts?.data?.[0]?.attributes?.content
            return content ? <Markdown>{content}</Markdown> : null
          }}
        </PostsComponent>
      </Content>
    </Page>
  )
}

export { Post as default }
