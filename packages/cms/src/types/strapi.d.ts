import { ContentTypeUIDs } from '@strapi/strapi/lib/global'

declare global {
  import { CollectionTypeSchema, SingleTypeSchema } from '@strapi/strapi'
  type EnvVar<T = string | number | null | boolean | Array<string>> = T
  type EnvFunction = <T = EnvVar>(key: string, defaultValue?: T) => T
  type LogLevel = 'info' | 'warn' | 'error'
  type TypedEnvFunction = {
    int(key: string, defaultValue?: number): number
    bool(key: string, defaultValue?: boolean): boolean
    array(key: string, defaultValue?: string[]): string[]
  }

  interface Strapi {
    fs: {
      appendFile(path: string, content: Buffer | string): void
      removeAppFile(path: string): void
      writePluginFile(path: string, content: Buffer | string): void
      writeAppFile(path: string, content: Buffer | string): void
    }
    log: {
      [key in LogLevel]: (...args: unknown[]) => void
    }
  }
  namespace Strapi {
    type App = { strapi: Strapi }
    type Env = { env: EnvFunction & TypedEnvFunction }
    namespace Db {
      type Client = 'sqlite' | 'pg' | 'postgres' | 'postgresql' | 'mysql'
    }
    interface Schemas {
      'post::post.uid': CollectionTypeSchema
      'service::service.uid': CollectionTypeSchema
      'translation::translation.uid': SingleTypeSchema
      'website::website.uid': SingleTypeSchema
    }
    namespace Graphql {
      import { FieldResolver, core } from 'nexus'

      type Plugin = { service<T = any>(name: 'extension' | 'content-api' | 'type-registry'): T }

      interface SchemaExtension {
        resolvers?: { [key: string]: { [key: string]: FieldResolver } }
      }

      type ExtensionService = {
        use(schemaExtensionCallback: () => any): void
        shadowCRUD<T = ContentTypeUIDs>(
          entityName: T,
        ): {
          disableMutations()
          disableQueries()
          disable()
        }
      }
      type ContentApiService = { buildSchema(): core.NexusGraphQLSchema }
    }
    type PluginsConfig = { [key: string]: Partial<{ enabled: boolean; resolve: string; config: Record<string, unknown> }> }
  }
}
