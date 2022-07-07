import { Button, Col, Layout, Row, Space, Typography } from 'antd'
import { FormattedMessage } from 'react-intl'

const Pay = () => (
  <Layout.Content className={'ant-layout-content-centered'}>
    <Row style={{ marginTop: 24 }} gutter={[0, 48]}>
      <Col span={24}>
        <Typography.Title level={2}>
          <FormattedMessage id={'pay.title'} />
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Space direction={'vertical'} align={'center'} size={'large'}>
          <Button
            style={{ width: 200 }}
            block
            type={'primary'}
            id={'checkout'}
            onClick={() => {
              eval('button.setAmount(1500, "UAH", true)')
              return eval('location.href=button.getUrl()')
            }}
          >
            <FormattedMessage id={'pay.1-button'} />
          </Button>
          <Button
            block
            style={{ width: 200 }}
            type={'primary'}
            id={'checkout'}
            onClick={() => {
              eval('button.setAmount(3000, "UAH", true)')
              return eval('location.href=button.getUrl()')
            }}
          >
            <FormattedMessage id={'pay.2-button'} />
          </Button>
          <Button
            block
            style={{ width: 200 }}
            type={'primary'}
            id={'checkout'}
            onClick={() => {
              eval('button.setAmount(4500, "UAH", true)')
              return eval('location.href=button.getUrl()')
            }}
          >
            <FormattedMessage id={'pay.3-button'} />
          </Button>
          <Button
            block
            style={{ width: 200 }}
            type={'primary'}
            id={'checkout'}
            onClick={() => {
              eval('button.setAmount(7500, "UAH", true)')
              return eval('location.href=button.getUrl()')
            }}
          >
            <FormattedMessage id={'pay.5-button'} />
          </Button>
          <Button
            block
            style={{ width: 200 }}
            type={'primary'}
            id={'checkout'}
            onClick={() => {
              eval('button.setAmount(15000, "UAH", true)')
              return eval('location.href=button.getUrl()')
            }}
          >
            <FormattedMessage id={'pay.10-button'} />
          </Button>
        </Space>
      </Col>
    </Row>
  </Layout.Content>
)

export { Pay as default }
