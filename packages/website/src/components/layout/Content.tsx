import { Layout } from 'antd'
import classnames from 'classnames'
import { CSSProperties, FC } from 'react'
import './Content.less'

type ContentProps = { fixed: boolean; centered: boolean; style: CSSProperties }

const Content: FC<Partial<ContentProps>> = ({ fixed = true, centered = true, style, children }) => (
  <Layout.Content
    style={style}
    className={classnames({
      'ant-layout-content-fixed': fixed,
      'ant-layout-content-centered': centered,
    })}
  >
    {children}
  </Layout.Content>
)

export { Content }
