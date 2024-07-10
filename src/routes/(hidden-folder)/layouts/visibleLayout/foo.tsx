import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/(hidden-folder)/layouts/visibleLayout/foo',
)({
  component: () => (
    <div>
      <p>this layout is visible in the uRL</p>
      <Link to={'/(hidden-folder)/layouts/visibleLayout/bar'}>bar</Link>
      <Link to={'/(hidden-folder)/layouts/visibleLayout/foo'}>foo</Link>
      <hr />
      <Outlet />
    </div>
  ),
});

//공통 레이아웃을 원하지만 패스에 표시되는걸 원치 않을 경우
