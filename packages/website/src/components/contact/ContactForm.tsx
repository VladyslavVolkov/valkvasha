import {Button, Col, Form, FormProps, Input, Layout, Row, Typography} from 'antd'
import {FC} from 'react'
import {FormattedMessage, useIntl} from 'react-intl'

const formProps: FormProps = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
}

const ContactForm: FC = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout.Content>
      <Row gutter={[0, 40]}>
        <Col offset={8} span={24}>
          <Typography.Title level={2} style={{ margin: '0 auto' }}><FormattedMessage id={'form.title'}/></Typography.Title>
        </Col>
        <Col span={24}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            {...formProps} validateMessages={validateMessages}>
            <Form.Item name={'name'} label={formatMessage({ id: 'form.name' })} required>
              <Input/>
            </Form.Item>
            <Form.Item name={'email'} label={formatMessage({ id: 'form.email' })} rules={[{ required: true, type: 'email' }]}>
              <Input/>
            </Form.Item>
            <Form.Item name={'message'} label={formatMessage({ id: 'form.message' })} rules={[{ required: true, type: 'string' }]}>
              <Input.TextArea style={{ width: '100%' }}/>
            </Form.Item>
            <Form.Item wrapperCol={{ ...formProps.wrapperCol, offset: 8 }}>
              <Button type='primary' htmlType='submit'>
                {formatMessage({ id: 'form.submit' })}
              </Button>
            </Form.Item>
          </Form></Col>
      </Row>
    </Layout.Content>
  )
}

export {ContactForm}
