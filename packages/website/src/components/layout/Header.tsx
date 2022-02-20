import { Card, Col, Row } from 'antd'
import { FC } from 'react'
import { Logo } from 'src/components/logo/Logo'
import { PhoneOutlined } from '@ant-design/icons'

type HeaderProps = typeof Row.defaultProps & { data: Maybe<EntryFragment>[] }

const Header: FC<HeaderProps> = ({ data = [], ...props }) => {
  return (
    <Row justify={'space-between'} align={'middle'} {...props}>
      <Col>
        <Logo />
      </Col>
      <Col>
        <Card.Meta
          avatar={<PhoneOutlined />}
          title={data?.find(it => it?.key === 'header.title')?.value}
          description={data?.find(it => it?.key === 'header.phone')?.value}
        ></Card.Meta>
      </Col>
    </Row>
  )
}

export { Header }
