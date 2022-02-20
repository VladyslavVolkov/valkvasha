import { Layout } from 'antd'
import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

const Page: FC = props => {
  return (
    <>
      <Helmet />
      <Layout.Content style={{ padding: '40px 0' }}>{props.children}</Layout.Content>
    </>
  )
}

export { Page }
