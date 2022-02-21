import { Col, Image, List, Row, Space, Typography } from 'antd'
import { VFC } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Content } from 'src/components/layout'

const About: VFC = () => {
  const props = useOutletContext<AboutFragment>()
  return (
    <Content style={{ padding: '24px 16px' }} centered={false}>
      <Row justify={'space-between'} gutter={40}>
        <Col span={12}>
          <Space direction={'vertical'}>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <Typography.Title level={5}>{props?.education?.key}</Typography.Title>
                <Typography.Paragraph>{props?.education?.value}</Typography.Paragraph>
              </Col>
              <Col span={24}>
                <List
                  header={<Typography.Title level={5}>Дополнительно</Typography.Title>}
                  split={false}
                  size={'large'}
                  dataSource={props?.diplomas ?? []}
                  renderItem={it => <Typography.Paragraph>{[it?.title, it?.subtitle].join(' ')}</Typography.Paragraph>}
                />
              </Col>
              <Col span={24}>
                <Typography.Paragraph>{props?.about}</Typography.Paragraph>
              </Col>
              <Col span={24}>
                <Typography.Paragraph>{props?.quote}</Typography.Paragraph>
              </Col>
            </Row>
          </Space>
        </Col>
        <Col span={12}>
          <Image preview={false} src={props?.photo?.data?.attributes?.url} />
        </Col>
      </Row>
    </Content>
  )
}

export { About as default }
