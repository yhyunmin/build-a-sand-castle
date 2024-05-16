import {Link,Outlet,createRootRoute} from '@tanstack/react-router'

// 프로젝트의 루트 레이아웃

export const Route = createRootRoute({
component:RootComponent
})

function RootComponent () {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to={"/posts"}>Posts</Link>
    </nav>
    <hr/>
    <Outlet/>
    </>
  )
}
