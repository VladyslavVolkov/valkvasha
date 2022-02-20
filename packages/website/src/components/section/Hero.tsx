import { Button, Col, Row, Typography } from 'antd'
import { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Content } from 'src/components/layout'

const Hero: VFC<Partial<CardFragment>> = ({ title = '', subtitle = '', media, description }) => {
  const navigate = useNavigate()
  return (
    <Row
      align={'middle'}
      justify={'center'}
      style={{
        minHeight: 600,
        padding: '100px 0',
        backgroundImage: media?.data?.attributes?.url ? `url(${media.data.attributes.url})` : undefined,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Content>
        <Col span={12}>
          <Row justify={'center'} align={'middle'}>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Typography.Title level={2}>{title}</Typography.Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Typography.Title level={3}>{description}</Typography.Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button onClick={() => navigate('/contacts')} type={'primary'}>
                {subtitle}
              </Button>
            </Col>
          </Row>
        </Col>
      </Content>
    </Row>
  )
}

export { Hero }
