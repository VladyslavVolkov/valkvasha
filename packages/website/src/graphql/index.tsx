import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
export type CardFragment = { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null };

export type EntryFragment = { id: string, key?: string | null, value: string };

export type FileFragment = { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null };

export type HeadlineFragment = { id: string, title?: string | null, subtitle?: string | null };

export type LinkFragment = { id: string, title?: string | null, url: string };

export type MenuFragment = { id: string, children: Array<{ id: string, title?: string | null, url: string } | null> };

export type SeoFragment = { id: string, canonicalURL?: string | null, keywords?: string | null, metaTitle: string, metaViewport?: string | null, metaDescription?: string | null };

export type ParagraphFragment = { id: string, value: string };

export type TabFragment = { id: string, name: string, pane: { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } };

export type AboutFragment = { id: string, about?: string | null, pathname: string, quote?: string | null, photo?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null, diplomas?: Array<{ id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null> | null, education?: { id: string, key?: string | null, value: string } | null };

export type ContactUsFragment = { id: string, pathname: string, contact?: { id: string, phone?: string | null, email?: string | null, address?: string | null } | null };

export type HomeFragment = { id: string, pathname: string, section1?: { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null, section2?: Array<{ id: string, title?: string | null, subtitle?: string | null } | null> | null, section3?: Array<{ id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null> | null, section4?: { id: string, title?: string | null, subtitle?: string | null } | null, section5?: Array<{ id: string, title?: string | null, subtitle?: string | null } | null> | null, section6?: { id: string, title?: string | null, subtitle?: string | null } | null };

export type PostFragment = { slug?: string | null, name: string, teaser?: string | null, content?: string | null, cover?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null };

export type ServiceFragment = { name: string, slug: string, content?: string | null, cover?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null };

export type WebsiteFragment = { content?: Array<{ __typename: 'ComponentPageAbout', id: string, about?: string | null, pathname: string, quote?: string | null, photo?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null, diplomas?: Array<{ id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null> | null, education?: { id: string, key?: string | null, value: string } | null } | { __typename: 'ComponentPageContactUs', id: string, pathname: string, contact?: { id: string, phone?: string | null, email?: string | null, address?: string | null } | null } | { __typename: 'ComponentPageHome', id: string, pathname: string, section1?: { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null, section2?: Array<{ id: string, title?: string | null, subtitle?: string | null } | null> | null, section3?: Array<{ id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null> | null, section4?: { id: string, title?: string | null, subtitle?: string | null } | null, section5?: Array<{ id: string, title?: string | null, subtitle?: string | null } | null> | null, section6?: { id: string, title?: string | null, subtitle?: string | null } | null } | { __typename: 'Error' } | null> | null };

export type PostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostQuery = { post?: { data?: { id?: string | null, attributes?: { slug?: string | null, name: string, teaser?: string | null, content?: string | null, cover?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null } | null } | null };

export type PostsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<PostFiltersInput>;
}>;


export type PostsQuery = { posts?: { data: Array<{ id?: string | null, attributes?: { slug?: string | null, name: string, teaser?: string | null, content?: string | null, cover?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null }> } | null };

export type ServiceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ServiceQuery = { service?: { data?: { id?: string | null, attributes?: { name: string, slug: string, content?: string | null, cover?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null } | null } | null };

export type ServicesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  filters?: InputMaybe<ServiceFiltersInput>;
}>;


export type ServicesQuery = { services?: { data: Array<{ id?: string | null, attributes?: { name: string, slug: string, content?: string | null, cover?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null }> } | null };

export type TranslationsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type TranslationsQuery = { translation?: { data?: { id?: string | null, attributes?: { entry: Array<{ id: string, key?: string | null, value: string } | null> } | null } | null } | null };

export type WebsiteQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type WebsiteQuery = { website?: { data?: { id?: string | null, attributes?: { content?: Array<{ __typename: 'ComponentPageAbout', id: string, about?: string | null, pathname: string, quote?: string | null, photo?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null, diplomas?: Array<{ id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null> | null, education?: { id: string, key?: string | null, value: string } | null } | { __typename: 'ComponentPageContactUs', id: string, pathname: string, contact?: { id: string, phone?: string | null, email?: string | null, address?: string | null } | null } | { __typename: 'ComponentPageHome', id: string, pathname: string, section1?: { id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null, section2?: Array<{ id: string, title?: string | null, subtitle?: string | null } | null> | null, section3?: Array<{ id: string, title?: string | null, subtitle?: string | null, description?: string | null, media?: { data?: { id?: string | null, attributes?: { previewUrl?: string | null, url: string } | null } | null } | null } | null> | null, section4?: { id: string, title?: string | null, subtitle?: string | null } | null, section5?: Array<{ id: string, title?: string | null, subtitle?: string | null } | null> | null, section6?: { id: string, title?: string | null, subtitle?: string | null } | null } | { __typename: 'Error' } | null> | null } | null } | null } | null };

export const LinkProps = gql`
    fragment Link on ComponentUiLink {
  id
  title
  url
}
    `;
export const MenuProps = gql`
    fragment Menu on ComponentUiMenu {
  id
  children {
    ...Link
  }
}
    `;
export const SeoProps = gql`
    fragment Seo on ComponentSharedSeo {
  id
  canonicalURL
  keywords
  metaTitle
  metaViewport
  metaDescription
}
    `;
export const ParagraphProps = gql`
    fragment Paragraph on ComponentUiParagraph {
  id
  value
}
    `;
export const FileProps = gql`
    fragment File on UploadFileEntity {
  id
  attributes {
    previewUrl
    url
  }
}
    `;
export const CardProps = gql`
    fragment Card on ComponentUiCard {
  id
  title
  subtitle
  description
  media {
    data {
      ...File
    }
  }
}
    `;
export const TabProps = gql`
    fragment Tab on ComponentUiTab {
  id
  name
  pane {
    ...Card
  }
}
    `;
export const PostProps = gql`
    fragment Post on Post {
  slug
  name
  teaser
  content
  cover {
    data {
      ...File
    }
  }
}
    `;
export const ServiceProps = gql`
    fragment Service on Service {
  name
  slug
  content
  cover {
    data {
      ...File
    }
  }
}
    `;
export const HeadlineProps = gql`
    fragment Headline on ComponentUiHeadline {
  id
  title
  subtitle
}
    `;
export const HomeProps = gql`
    fragment Home on ComponentPageHome {
  id
  pathname
  section1 {
    ...Card
  }
  section2 {
    ...Headline
  }
  section3 {
    ...Card
  }
  section4 {
    ...Headline
  }
  section5 {
    ...Headline
  }
  section6 {
    ...Headline
  }
}
    `;
export const EntryProps = gql`
    fragment Entry on ComponentDataEntry {
  id
  key
  value
}
    `;
export const AboutProps = gql`
    fragment About on ComponentPageAbout {
  id
  about
  pathname
  quote
  photo {
    data {
      ...File
    }
  }
  diplomas {
    id
    title
    subtitle
    description
    media {
      data {
        ...File
      }
    }
  }
  education {
    ...Entry
  }
}
    `;
export const ContactUsProps = gql`
    fragment ContactUs on ComponentPageContactUs {
  id
  pathname
  contact {
    id
    phone
    email
    address
  }
}
    `;
export const WebsiteProps = gql`
    fragment Website on Website {
  content {
    __typename
    ...Home
    ...About
    ...ContactUs
  }
}
    `;
export const PostDocument = gql`
    query post($id: ID!) {
  post(id: $id) {
    data {
      id
      attributes {
        ...Post
      }
    }
  }
}
    ${PostProps}
${FileProps}`;
export type PostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>, 'query'> & ({ variables: PostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostComponent = (props: PostComponentProps) => (
      <ApolloReactComponents.Query<PostQuery, PostQueryVariables> query={PostDocument} {...props} />
    );
    

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query posts($locale: I18NLocaleCode, $pagination: PaginationArg, $sort: [String], $filters: PostFiltersInput) {
  posts(locale: $locale, pagination: $pagination, sort: $sort, filters: $filters) {
    data {
      id
      attributes {
        ...Post
      }
    }
  }
}
    ${PostProps}
${FileProps}`;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>;

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const ServiceDocument = gql`
    query service($id: ID!) {
  service(id: $id) {
    data {
      id
      attributes {
        ...Service
      }
    }
  }
}
    ${ServiceProps}
${FileProps}`;
export type ServiceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ServiceQuery, ServiceQueryVariables>, 'query'> & ({ variables: ServiceQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ServiceComponent = (props: ServiceComponentProps) => (
      <ApolloReactComponents.Query<ServiceQuery, ServiceQueryVariables> query={ServiceDocument} {...props} />
    );
    

/**
 * __useServiceQuery__
 *
 * To run a query within a React component, call `useServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServiceQuery(baseOptions: Apollo.QueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
      }
export function useServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
        }
export type ServiceQueryHookResult = ReturnType<typeof useServiceQuery>;
export type ServiceLazyQueryHookResult = ReturnType<typeof useServiceLazyQuery>;
export type ServiceQueryResult = Apollo.QueryResult<ServiceQuery, ServiceQueryVariables>;
export const ServicesDocument = gql`
    query services($locale: I18NLocaleCode, $pagination: PaginationArg, $filters: ServiceFiltersInput) {
  services(locale: $locale, pagination: $pagination, filters: $filters) {
    data {
      id
      attributes {
        ...Service
      }
    }
  }
}
    ${ServiceProps}
${FileProps}`;
export type ServicesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ServicesQuery, ServicesQueryVariables>, 'query'>;

    export const ServicesComponent = (props: ServicesComponentProps) => (
      <ApolloReactComponents.Query<ServicesQuery, ServicesQueryVariables> query={ServicesDocument} {...props} />
    );
    

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useServicesQuery(baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
      }
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
        }
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;
export const TranslationsDocument = gql`
    query translations($locale: I18NLocaleCode = "ru") {
  translation(locale: $locale) {
    data {
      id
      attributes {
        entry {
          ...Entry
        }
      }
    }
  }
}
    ${EntryProps}`;
export type TranslationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TranslationsQuery, TranslationsQueryVariables>, 'query'>;

    export const TranslationsComponent = (props: TranslationsComponentProps) => (
      <ApolloReactComponents.Query<TranslationsQuery, TranslationsQueryVariables> query={TranslationsDocument} {...props} />
    );
    

/**
 * __useTranslationsQuery__
 *
 * To run a query within a React component, call `useTranslationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTranslationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTranslationsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useTranslationsQuery(baseOptions?: Apollo.QueryHookOptions<TranslationsQuery, TranslationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TranslationsQuery, TranslationsQueryVariables>(TranslationsDocument, options);
      }
export function useTranslationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TranslationsQuery, TranslationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TranslationsQuery, TranslationsQueryVariables>(TranslationsDocument, options);
        }
export type TranslationsQueryHookResult = ReturnType<typeof useTranslationsQuery>;
export type TranslationsLazyQueryHookResult = ReturnType<typeof useTranslationsLazyQuery>;
export type TranslationsQueryResult = Apollo.QueryResult<TranslationsQuery, TranslationsQueryVariables>;
export const WebsiteDocument = gql`
    query website($locale: I18NLocaleCode = "ru") {
  website(locale: $locale) {
    data {
      id
      attributes {
        ...Website
      }
    }
  }
}
    ${WebsiteProps}
${HomeProps}
${CardProps}
${FileProps}
${HeadlineProps}
${AboutProps}
${EntryProps}
${ContactUsProps}`;
export type WebsiteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WebsiteQuery, WebsiteQueryVariables>, 'query'>;

    export const WebsiteComponent = (props: WebsiteComponentProps) => (
      <ApolloReactComponents.Query<WebsiteQuery, WebsiteQueryVariables> query={WebsiteDocument} {...props} />
    );
    

/**
 * __useWebsiteQuery__
 *
 * To run a query within a React component, call `useWebsiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebsiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebsiteQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useWebsiteQuery(baseOptions?: Apollo.QueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
      }
export function useWebsiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
        }
export type WebsiteQueryHookResult = ReturnType<typeof useWebsiteQuery>;
export type WebsiteLazyQueryHookResult = ReturnType<typeof useWebsiteLazyQuery>;
export type WebsiteQueryResult = Apollo.QueryResult<WebsiteQuery, WebsiteQueryVariables>;