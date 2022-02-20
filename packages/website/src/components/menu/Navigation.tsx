import { UnorderedListOutlined } from '@ant-design/icons'
import { FC, VFC } from 'react'
import { Col, Menu, MenuProps, Row } from 'antd'
import { NavLink } from 'react-router-dom'
import './Navigation.less'
import { useApp } from 'src/components/app'

type NavigationProps = { data: LinkFragment[] } & MenuProps

const BurgerMenu: FC = () => {
  const { burger } = useApp()
  return <UnorderedListOutlined onClick={burger.toggle} />
}

const TopMenu: VFC<NavigationProps> = ({ data, ...props }) => (
  <Row>
    <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
      <Menu theme={'light'} mode={'horizontal'} {...props}>
        {data?.map(
          it =>
            it?.url && (
              <Menu.Item key={it?.url}>
                <NavLink to={it.url}>{it.title}</NavLink>
              </Menu.Item>
            ),
        )}
      </Menu>
    </Col>
    <Col xs={1} sm={1} md={1} lg={0} xl={0} xxl={0}>
      <BurgerMenu />
    </Col>
  </Row>
)

export { TopMenu }
