import { printSchema } from 'graphql'

function generateGraphqlSchema(strapi: Strapi.Strapi) {
  const schema = getContentApiService(strapi).buildSchema()
  strapi.fs.writeAppFile('./src/graphql/schema.graphqls', printSchema(schema))
  strapi.log.info('[GraphQL] Schema generated')
}

function getContentApiService(strapi: Strapi.Strapi) {
  return strapi.service<Strapi.Graphql.ContentApiService>('plugin::graphql.content-api')
}

function getExtensionService(strapi: Strapi.Strapi) {
  return strapi.service<Strapi.Graphql.ExtensionService>('plugin::graphql.extension')
}

function getSchemaExtension() {
  return () => ({
    resolvers: {
      UploadFile: {
        url: async root => {
          let url = new URL(root.url)
          if (process.env.S3_PUBLIC_URL) {
            url = new URL(`${process.env.S3_PUBLIC_URL}${url.pathname}`)
          }
          return url.toString()
        },
      },
    },
  })
}

export { generateGraphqlSchema, getExtensionService, getSchemaExtension }
