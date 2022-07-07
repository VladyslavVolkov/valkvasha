import { UnorderedListOutlined } from '@ant-design/icons'
import { FC, VFC } from 'react'
import { Alert, Button, Col, Layout, Menu, MenuProps, Row, Typography } from 'antd'
import { useIntl } from 'react-intl'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navigation.less'
import { useApp } from 'src/components/app'

type NavigationProps = { data: LinkFragment[] } & MenuProps

const TopMenu: FC<NavigationProps> = ({ data, ...props }) => {
  const { pathname } = useLocation()
  const { formatMessage } = useIntl()
  const {
    i18n: { locale, setLocale },
  } = useApp()

  const text = formatMessage({ id: 'pay.banner' }).split('\n')

  return (
    <Row justify={'space-between'}>
      <Col span={24}>
        <Row>
          <Col span={23}>
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
          <Col span={1}>
            <Link to={'#'} type={'ghost'} onClick={() => setLocale(locale === 'ru' ? 'uk' : 'ru')}>
              {locale === 'ru' ? 'Укр' : 'Рус'}
            </Link>
          </Col>
        </Row>
      </Col>
      {pathname === '/' && (
        <Col span={24}>
          <Alert
            type={'info'}
            icon={<></>}
            message={text[0]}
            description={<Typography.Text>{text[1]}</Typography.Text>}
            action={
              <Button style={{ marginTop: 8 }} type={'primary'} href={'/pay'}>
                {formatMessage({ id: 'pay.button' })}
              </Button>
            }
            closable={false}
          ></Alert>
        </Col>
      )}
    </Row>
  )
}

export { TopMenu }
