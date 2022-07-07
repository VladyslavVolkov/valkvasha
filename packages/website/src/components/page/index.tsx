import { Layout } from 'antd'
import {FC, PropsWithChildren, ReactNode} from 'react'

const Page: FC<PropsWithChildren<Partial<ReactNode>>> = props => {
  return (
    <>
      <Layout.Content style={{ padding: '40px 0' }}>{props.children}</Layout.Content>
    </>
  )
}

export { Page }
