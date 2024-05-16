/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as WathceslayoutImport } from './routes/_wathceslayout'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as WatcheslayoutWatchesImport } from './routes/_watcheslayout.watches'
import { Route as LayoutDogsImport } from './routes/_layout.dogs'
import { Route as AboutSettingsIndexImport } from './routes/about/settings/index'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const WathceslayoutRoute = WathceslayoutImport.update({
  id: '/_wathceslayout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const WatcheslayoutWatchesRoute = WatcheslayoutWatchesImport.update({
  path: '/watches',
  getParentRoute: () => rootRoute,
} as any)

const LayoutDogsRoute = LayoutDogsImport.update({
  path: '/dogs',
  getParentRoute: () => LayoutRoute,
} as any)

const AboutSettingsIndexRoute = AboutSettingsIndexImport.update({
  path: '/about/settings/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_wathceslayout': {
      id: '/_wathceslayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof WathceslayoutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/_layout/dogs': {
      id: '/_layout/dogs'
      path: '/dogs'
      fullPath: '/dogs'
      preLoaderRoute: typeof LayoutDogsImport
      parentRoute: typeof LayoutImport
    }
    '/_watcheslayout/watches': {
      id: '/_watcheslayout/watches'
      path: '/watches'
      fullPath: '/watches'
      preLoaderRoute: typeof WatcheslayoutWatchesImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/about/': {
      id: '/about/'
      path: '/about/'
      fullPath: '/about/'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/about/settings/': {
      id: '/about/settings/'
      path: '/about/settings/'
      fullPath: '/about/settings/'
      preLoaderRoute: typeof AboutSettingsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LayoutRoute: LayoutRoute.addChildren({ LayoutDogsRoute }),
  PostsRoute: PostsRoute.addChildren({ PostsPostIdRoute }),
  WatcheslayoutWatchesRoute,
  AboutIndexRoute,
  AboutSettingsIndexRoute,
})

/* prettier-ignore-end */
