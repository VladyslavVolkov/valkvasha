const { generateGraphqlSchema, getExtensionService, getSchemaExtension } = require('./graphql')

module.exports = {
  register({ strapi }) {
    const extensionService = getExtensionService(strapi)
    // Disabling CUD operations for public-facing APIs
    const readOnlyEntities = ['website', 'post', 'service', 'tag', 'event']
    readOnlyEntities.forEach(entity => extensionService.shadowCRUD(`api::${entity}.${entity}`).disableMutations())
    // Decorating schema with custom fields, resolvers and extensions
    extensionService.use(getSchemaExtension(strapi))
    strapi.log.info('[GraphQL] Schema extensions applied..')
  },

  bootstrap({ strapi }) {
    generateGraphqlSchema(strapi)
  },
}
