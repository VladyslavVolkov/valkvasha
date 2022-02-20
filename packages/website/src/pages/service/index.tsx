import { Card, Divider, List, Typography } from 'antd'
import { FC } from 'react'
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Content } from 'src/components/layout'
import { Page } from 'src/components/page'
import { ServicesComponent } from 'src/graphql'

const Service: FC = () => {
  const { i18n } = useApp()
  const { slug } = useParams()
  const navigate = useNavigate()

  return (
    <Page>
      <ServicesComponent variables={{ locale: i18n.locale }}>
        {({ data, loading }) => {
          const service = data?.services?.data?.find(it => it?.attributes?.slug === slug)?.attributes
          return service ? (
            <Content centered={false}>
              {service.content && <Markdown>{service.content}</Markdown>}
              <Divider />
              <List
                split={false}
                loading={loading}
                size={'large'}
                grid={{ column: 5, xs: 1, sm: 1, md: 2, lg: 2, xl: 5 }}
                itemLayout={'horizontal'}
                dataSource={data?.services?.data?.filter(it => it?.attributes?.slug !== slug) ?? []}
                renderItem={it => (
                  <List.Item key={it?.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/services/${it?.attributes?.slug}`)}>
                    <Card bordered={false} cover={<img alt={it?.attributes?.name ?? ''} src={it?.attributes?.cover?.data?.attributes?.url} />}>
                      <Card.Meta title={<Typography.Title level={5}>{it?.attributes?.name}</Typography.Title>} />
                    </Card>
                  </List.Item>
                )}
              />
            </Content>
          ) : null
        }}
      </ServicesComponent>
    </Page>
  )
}

export { Service as default }
