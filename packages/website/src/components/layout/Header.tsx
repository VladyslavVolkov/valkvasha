import { PhoneOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import { FC } from 'react'
import { Logo } from 'src/components/logo/Logo'

type HeaderProps = typeof Row.defaultProps & { data: Maybe<EntryFragment>[] }

const Header: FC<HeaderProps> = ({ data = [], ...props }) => {
  return (
    <Row justify={'space-between'} align={'middle'} {...props}>
      <Col xs={24} sm={24} md={15} lg={17} flex={'auto'}>
        <Logo />
      </Col>

      <Col xs={24} sm={24} md={9} lg={7}>
        <Card.Meta
          avatar={<PhoneOutlined />}
          title={<Typography.Text>{data?.find(it => it?.key === 'header.title')?.value}</Typography.Text>}
          description={
            <Typography.Link href={`tel:${data?.find(it => it?.key === 'header.phone')?.value}`}>
              {data?.find(it => it?.key === 'header.phone')?.value}
            </Typography.Link>
          }
        ></Card.Meta>
      </Col>
    </Row>
  )
}

export { Header }
