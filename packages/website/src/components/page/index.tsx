import { Layout } from 'antd'
import { FC, PropsWithChildren } from 'react'

const Page: FC<PropsWithChildren> = props => {
  return <Layout.Content style={{ padding: '40px 0' }}>{props.children}</Layout.Content>
}

export { Page }
