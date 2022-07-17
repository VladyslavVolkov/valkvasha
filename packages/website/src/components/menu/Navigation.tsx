import './Navigation.less'

import { Alert, Button, Col, Menu, MenuProps, Row, Typography } from 'antd'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useLocale } from '../app/I18n'

type NavigationProps = { data: LinkFragment[] } & MenuProps

const TopMenu: FC<NavigationProps> = ({ data, ...props }) => {
  const { pathname } = useLocation()
  const { formatMessage } = useIntl()
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()

  const text = formatMessage({ id: 'pay.banner' }).split('\n')

  return (
    <Row>
      <Col span={24}>
        <Row gutter={24} justify={'space-between'} align={'middle'}>
          <Col flex={'auto'}>
            <Menu theme={'light'} mode={'horizontal'} items={data?.map(it => ({ label: it.title, key: it.url, onClick: () => navigate(it.url) }))} {...props} />
          </Col>
          <Col flex={'80px'}>
            <Button type={'link'} size={'small'} onClick={() => setLocale(locale === 'ru' ? 'uk' : 'ru')}>
              {locale === 'ru' ? 'Укр' : 'Рус'}
            </Button>
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
              <Button style={{ marginTop: 8 }} type={'primary'} href={'/support'}>
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
