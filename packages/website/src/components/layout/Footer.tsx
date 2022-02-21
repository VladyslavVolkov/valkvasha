import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import { FC } from 'react'

const Footer: FC<{ data: Maybe<EntryFragment>[] }> = ({ data = [] }) => (
  <Row align={'middle'} justify={'space-between'}>
    <Col>
      <Card.Meta title={data?.find(it => it?.key === 'header.title')?.value} description={data?.find(it => it?.key === 'header.phone')?.value}></Card.Meta>
    </Col>
    <Col style={{ fontSize: 32 }}>
      <InstagramFilled size={32} /> <FacebookFilled size={32} />
    </Col>
  </Row>
)

export { Footer }
