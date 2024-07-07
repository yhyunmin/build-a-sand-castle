/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as FormImport } from './routes/form'
import { Route as AgGridImport } from './routes/ag-grid'
import { Route as WrapperImport } from './routes/_wrapper'
import { Route as WathceslayoutImport } from './routes/_wathceslayout'
import { Route as LayoutImport } from './routes/_layout'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as TanstackQueryIndexImport } from './routes/tanstack-query/index'
import { Route as TabsIndexImport } from './routes/tabs/index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as PokemonIndexImport } from './routes/pokemon/index'
import { Route as LazyLoadingIndexImport } from './routes/lazy-loading/index'
import { Route as FormIndexImport } from './routes/form/index'
import { Route as DayjsIndexImport } from './routes/dayjs/index'
import { Route as PostsDeepImport } from './routes/posts_.deep'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as PokemonIdImport } from './routes/pokemon/$id'
import { Route as FormBuildImport } from './routes/form/build'
import { Route as WrapperRolexImport } from './routes/_wrapper.rolex'
import { Route as WatcheslayoutWatchesImport } from './routes/_watcheslayout.watches'
import { Route as LayoutDogsImport } from './routes/_layout.dogs'
import { Route as AuthenticatedSettingsImport } from './routes/_authenticated/settings'
import { Route as AuthenticatedDashboardImport } from './routes/_authenticated/dashboard'
import { Route as TabsMainIndexImport } from './routes/tabs/main/index'
import { Route as FormListIndexImport } from './routes/form/list/index'
import { Route as FormEditIndexImport } from './routes/form/edit/index'
import { Route as BlogBlogIdIndexImport } from './routes/blog/$blogId/index'
import { Route as AboutSettingsIndexImport } from './routes/about/settings/index'
import { Route as FormListIdImport } from './routes/form/list/$id'
import { Route as FormEditIdImport } from './routes/form/edit/$id'

// Create Virtual Routes

const AboutIndexLazyImport = createFileRoute('/about/')()

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const FormRoute = FormImport.update({
  path: '/form',
  getParentRoute: () => rootRoute,
} as any)

const AgGridRoute = AgGridImport.update({
  path: '/ag-grid',
  getParentRoute: () => rootRoute,
} as any)

const WrapperRoute = WrapperImport.update({
  id: '/_wrapper',
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

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexLazyRoute = AboutIndexLazyImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about/index.lazy').then((d) => d.Route))

const TanstackQueryIndexRoute = TanstackQueryIndexImport.update({
  path: '/tanstack-query/',
  getParentRoute: () => rootRoute,
} as any)

const TabsIndexRoute = TabsIndexImport.update({
  path: '/tabs/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIndexRoute = PokemonIndexImport.update({
  path: '/pokemon/',
  getParentRoute: () => rootRoute,
} as any)

const LazyLoadingIndexRoute = LazyLoadingIndexImport.update({
  path: '/lazy-loading/',
  getParentRoute: () => rootRoute,
} as any)

const FormIndexRoute = FormIndexImport.update({
  path: '/',
  getParentRoute: () => FormRoute,
} as any)

const DayjsIndexRoute = DayjsIndexImport.update({
  path: '/dayjs/',
  getParentRoute: () => rootRoute,
} as any)

const PostsDeepRoute = PostsDeepImport.update({
  path: '/posts/deep',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIdRoute = PokemonIdImport.update({
  path: '/pokemon/$id',
  getParentRoute: () => rootRoute,
} as any)

const FormBuildRoute = FormBuildImport.update({
  path: '/build',
  getParentRoute: () => FormRoute,
} as any)

const WrapperRolexRoute = WrapperRolexImport.update({
  path: '/rolex',
  getParentRoute: () => WrapperRoute,
} as any)

const WatcheslayoutWatchesRoute = WatcheslayoutWatchesImport.update({
  path: '/watches',
  getParentRoute: () => rootRoute,
} as any)

const LayoutDogsRoute = LayoutDogsImport.update({
  path: '/dogs',
  getParentRoute: () => LayoutRoute,
} as any)

const AuthenticatedSettingsRoute = AuthenticatedSettingsImport.update({
  path: '/settings',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const TabsMainIndexRoute = TabsMainIndexImport.update({
  path: '/tabs/main/',
  getParentRoute: () => rootRoute,
} as any)

const FormListIndexRoute = FormListIndexImport.update({
  path: '/list/',
  getParentRoute: () => FormRoute,
} as any)

const FormEditIndexRoute = FormEditIndexImport.update({
  path: '/edit/',
  getParentRoute: () => FormRoute,
} as any)

const BlogBlogIdIndexRoute = BlogBlogIdIndexImport.update({
  path: '/blog/$blogId/',
  getParentRoute: () => rootRoute,
} as any)

const AboutSettingsIndexRoute = AboutSettingsIndexImport.update({
  path: '/about/settings/',
  getParentRoute: () => rootRoute,
} as any)

const FormListIdRoute = FormListIdImport.update({
  path: '/list/$id',
  getParentRoute: () => FormRoute,
} as any)

const FormEditIdRoute = FormEditIdImport.update({
  path: '/edit/$id',
  getParentRoute: () => FormRoute,
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
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
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
    '/_wrapper': {
      id: '/_wrapper'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof WrapperImport
      parentRoute: typeof rootRoute
    }
    '/ag-grid': {
      id: '/ag-grid'
      path: '/ag-grid'
      fullPath: '/ag-grid'
      preLoaderRoute: typeof AgGridImport
      parentRoute: typeof rootRoute
    }
    '/form': {
      id: '/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof FormImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/dashboard': {
      id: '/_authenticated/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsImport
      parentRoute: typeof AuthenticatedImport
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
    '/_wrapper/rolex': {
      id: '/_wrapper/rolex'
      path: '/rolex'
      fullPath: '/rolex'
      preLoaderRoute: typeof WrapperRolexImport
      parentRoute: typeof WrapperImport
    }
    '/form/build': {
      id: '/form/build'
      path: '/build'
      fullPath: '/form/build'
      preLoaderRoute: typeof FormBuildImport
      parentRoute: typeof FormImport
    }
    '/pokemon/$id': {
      id: '/pokemon/$id'
      path: '/pokemon/$id'
      fullPath: '/pokemon/$id'
      preLoaderRoute: typeof PokemonIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/deep': {
      id: '/posts/deep'
      path: '/posts/deep'
      fullPath: '/posts/deep'
      preLoaderRoute: typeof PostsDeepImport
      parentRoute: typeof rootRoute
    }
    '/dayjs/': {
      id: '/dayjs/'
      path: '/dayjs/'
      fullPath: '/dayjs/'
      preLoaderRoute: typeof DayjsIndexImport
      parentRoute: typeof rootRoute
    }
    '/form/': {
      id: '/form/'
      path: '/'
      fullPath: '/form/'
      preLoaderRoute: typeof FormIndexImport
      parentRoute: typeof FormImport
    }
    '/lazy-loading/': {
      id: '/lazy-loading/'
      path: '/lazy-loading/'
      fullPath: '/lazy-loading/'
      preLoaderRoute: typeof LazyLoadingIndexImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/': {
      id: '/pokemon/'
      path: '/pokemon/'
      fullPath: '/pokemon/'
      preLoaderRoute: typeof PokemonIndexImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/tabs/': {
      id: '/tabs/'
      path: '/tabs/'
      fullPath: '/tabs/'
      preLoaderRoute: typeof TabsIndexImport
      parentRoute: typeof rootRoute
    }
    '/tanstack-query/': {
      id: '/tanstack-query/'
      path: '/tanstack-query/'
      fullPath: '/tanstack-query/'
      preLoaderRoute: typeof TanstackQueryIndexImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about/'
      fullPath: '/about/'
      preLoaderRoute: typeof AboutIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/form/edit/$id': {
      id: '/form/edit/$id'
      path: '/edit/$id'
      fullPath: '/form/edit/$id'
      preLoaderRoute: typeof FormEditIdImport
      parentRoute: typeof FormImport
    }
    '/form/list/$id': {
      id: '/form/list/$id'
      path: '/list/$id'
      fullPath: '/form/list/$id'
      preLoaderRoute: typeof FormListIdImport
      parentRoute: typeof FormImport
    }
    '/about/settings/': {
      id: '/about/settings/'
      path: '/about/settings/'
      fullPath: '/about/settings/'
      preLoaderRoute: typeof AboutSettingsIndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blogId/': {
      id: '/blog/$blogId/'
      path: '/blog/$blogId/'
      fullPath: '/blog/$blogId/'
      preLoaderRoute: typeof BlogBlogIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/form/edit/': {
      id: '/form/edit/'
      path: '/edit/'
      fullPath: '/form/edit/'
      preLoaderRoute: typeof FormEditIndexImport
      parentRoute: typeof FormImport
    }
    '/form/list/': {
      id: '/form/list/'
      path: '/list/'
      fullPath: '/form/list/'
      preLoaderRoute: typeof FormListIndexImport
      parentRoute: typeof FormImport
    }
    '/tabs/main/': {
      id: '/tabs/main/'
      path: '/tabs/main/'
      fullPath: '/tabs/main/'
      preLoaderRoute: typeof TabsMainIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedDashboardRoute,
    AuthenticatedSettingsRoute,
  }),
  LayoutRoute: LayoutRoute.addChildren({ LayoutDogsRoute }),
  WrapperRoute: WrapperRoute.addChildren({ WrapperRolexRoute }),
  AgGridRoute,
  FormRoute: FormRoute.addChildren({
    FormBuildRoute,
    FormIndexRoute,
    FormEditIdRoute,
    FormListIdRoute,
    FormEditIndexRoute,
    FormListIndexRoute,
  }),
  LoginRoute,
  ProfileRoute,
  SearchRoute,
  SettingsRoute,
  WatcheslayoutWatchesRoute,
  PokemonIdRoute,
  PostsPostIdRoute,
  PostsDeepRoute,
  DayjsIndexRoute,
  LazyLoadingIndexRoute,
  PokemonIndexRoute,
  PostsIndexRoute,
  TabsIndexRoute,
  TanstackQueryIndexRoute,
  AboutIndexLazyRoute,
  AboutSettingsIndexRoute,
  BlogBlogIdIndexRoute,
  TabsMainIndexRoute,
})

/* prettier-ignore-end */
