import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout'

const Service = lazy(() => import('./service'))
const Post = lazy(() => import('./post/Post'))
const Posts = lazy(() => import('./post/Posts'))
const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))
const ContactUs = lazy(() => import('./contact-us'))
const NotFound = lazy(() => import('./not-found'))

const pages: RouteObject[] = [
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        path: '',
      },
      {
        element: <Service />,
        path: 'services/:slug',
      },
      {
        element: <Posts />,
        path: 'posts',
      },
      {
        element: <Post />,
        path: 'posts/:slug',
      },
      {
        element: <About />,
        path: 'about',
      },
      {
        element: <ContactUs />,
        path: 'contacts',
      },
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
]
const Pages = () => useRoutes(pages)

export { Pages as default }
