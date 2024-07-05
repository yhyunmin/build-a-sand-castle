import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

// 프로젝트의 루트 레이아웃

export const Route = createRootRoute({
  component: RootComponent,
});

// activeProps : 라우트가 활성화된 링크 요소에 props 를 지정할 수 있음.
// props 뿐만아니라 반환하는 함수를 갖고 싶다면.
// {(isActive)=>{}} 를 사용하여 함수, 컴포넌트 이런걸 보낼 수 있음.

const activeProps = {
  style: {
    color: 'red',
  },
};

function RootComponent() {
  return (
    <>
      <nav>
        <Link to="/" style={{ marginLeft: '10px' }} activeProps={activeProps}>
          Home
        </Link>
        <Link
          to="/dayjs"
          style={{ marginLeft: '10px' }}
          activeProps={activeProps}
        >
          Dayjs
        </Link>
        <Link
          to={'/ag-grid'}
          style={{ marginLeft: '10px' }}
          activeProps={activeProps}
        >
          AG-grid
        </Link>
        <Link
          to={'/lazy-loading'}
          style={{ marginLeft: '10px' }}
          activeProps={activeProps}
        >
          lazy-loading
        </Link>
        <Link
          to={'/tabs'}
          style={{ marginLeft: '10px' }}
          activeProps={{ style: { color: 'red' } }}
        >
          tabs
        </Link>
        <Link
          to="/pokemon/"
          activeProps={activeProps}
          style={{ marginLeft: '10px' }}
        >
          Pokemons
        </Link>
        <Link
          to="/form/"
          activeProps={activeProps}
          style={{ marginLeft: '10px' }}
        >
          Form
        </Link>
        <Link to="/search" activeProps={activeProps}>
          Search
        </Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
