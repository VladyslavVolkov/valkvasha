import { VFC } from 'react'
import { Col, Row, Typography } from 'antd'

const Headline: VFC<Partial<HeadlineFragment>> = ({ title = '', subtitle = '' }) => (
  <Row style={{ textAlign: 'center' }} align={'middle'} justify={'center'}>
    <Col span={24}>
      <Typography.Title level={3}>{title}</Typography.Title>
    </Col>
    <Col span={24}>
      <Typography.Paragraph>{subtitle}</Typography.Paragraph>
    </Col>
  </Row>
)

export { Headline }
