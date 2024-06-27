import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

// 프로젝트의 루트 레이아웃

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <nav>
        <Link to="/" style={{ marginLeft: '10px' }}>
          Home
        </Link>
        <Link to="/dayjs" style={{ marginLeft: '10px' }}>
          Dayjs
        </Link>
        <Link to={'/ag-grid'} style={{ marginLeft: '10px' }}>
          AG-grid
        </Link>
        <Link to={'/lazy-loading'} style={{ marginLeft: '10px' }}>
          lazy-loading
        </Link>
        <Link to={'/tabs'} style={{ marginLeft: '10px' }}>
          tabs
        </Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
