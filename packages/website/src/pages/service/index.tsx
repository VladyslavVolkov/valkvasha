import { Card, Divider, List, Typography } from 'antd'
import { FC, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from 'src/components/app'
import { Content } from 'src/components/layout'
import { Page } from 'src/components/page'
import { ServiceComponent, ServicesComponent, useServicesQuery } from 'src/graphql'

const Service: FC = () => {
  const { i18n } = useApp()
  const { slug } = useParams()
  const navigate = useNavigate()

  return (
    <Page>
      <ServicesComponent>
        {({ data, loading }) => {
          const service =
            i18n?.locale === 'ru'
              ? data?.services?.data?.find(it => it?.attributes?.slug === slug)?.attributes
              : data?.services?.data?.find(it => it?.attributes?.slug === slug)?.attributes?.localizations?.data?.[0].attributes
          return service ? (
            <Content centered={false}>
              {service.content && <Markdown>{service?.content}</Markdown>}
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
