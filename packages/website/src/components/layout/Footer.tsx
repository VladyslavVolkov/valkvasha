import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import { FC } from 'react'

const Footer: FC<{ data: Maybe<EntryFragment>[] }> = ({ data = [] }) => {
  const phone = data?.find(it => it?.key === 'header.phone')?.value
  return (
    <Row align={'middle'} justify={'space-between'}>
      <Col>
        <Card.Meta title={data?.find(it => it?.key === 'header.title')?.value} description={<a href={`tel:${phone}`}>{phone}</a>} />
      </Col>
      <Col style={{ fontSize: 32 }}>
        <InstagramFilled size={32} /> <FacebookFilled size={32} />
      </Col>
    </Row>
  )
}

export { Footer }
