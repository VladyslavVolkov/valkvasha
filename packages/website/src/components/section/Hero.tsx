import { Button, Col, Row, Typography } from 'antd'
import { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Content } from 'src/components/layout'
import { ArrowRightOutlined } from '@ant-design/icons'

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
        backgroundPositionY: 'top',
        backgroundPositionX: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Content>
        <Col xs={24} sm={24} md={12}>
          <Row gutter={[24, 24]} justify={'center'} align={'middle'}>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Typography.Title level={2}>{title}</Typography.Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Typography.Title level={4}>{description}</Typography.Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button icon={<ArrowRightOutlined />} onClick={() => navigate('/contacts')} type={'primary'}>
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
