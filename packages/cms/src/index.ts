import { generateGraphqlSchema, getExtensionService, getSchemaExtension } from './graphql'

export default {
  register({ strapi }) {
    const extensionService = getExtensionService(strapi)
    // Disabling CUD operations for public-facing APIs
    const readOnlyEntities = ['website', 'post', 'service']
    readOnlyEntities.forEach(entity => extensionService.shadowCRUD(`api::${entity}.${entity}`).disableMutations())
    // Decorating schema with custom fields, resolvers and extensions
    extensionService.use(getSchemaExtension())
    strapi.log.info('[GraphQL] Schema extensions applied..')
  },

  bootstrap({ strapi }) {
    generateGraphqlSchema(strapi)
  },
}
