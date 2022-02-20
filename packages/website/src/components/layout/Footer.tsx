import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import { Col, List, Row } from 'antd'
import { FC } from 'react'

const Footer: FC = () => (
  <Row justify={'space-between'}>
    <Col></Col>
    <Col>
      <List
        grid={{ column: 2 }}
        itemLayout={'horizontal'}
        split={false}
        size={'default'}
        dataSource={[InstagramFilled, FacebookFilled]}
        renderItem={Icon => (
          <List.Item>
            <Icon width={32} size={32} />
          </List.Item>
        )}
      ></List>
    </Col>
  </Row>
)

export { Footer }
