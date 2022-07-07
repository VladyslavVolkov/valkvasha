import { PhoneOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row } from 'antd'
import { FC } from 'react'
import { Logo } from 'src/components/logo/Logo'

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
          description={<a href={`tel:${data?.find(it => it?.key === 'header.phone')?.value}`}>{data?.find(it => it?.key === 'header.phone')?.value}</a>}
        ></Card.Meta>
      </Col>
    </Row>
  )
}

export { Header }
