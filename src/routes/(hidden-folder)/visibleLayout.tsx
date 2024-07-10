import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(hidden-folder)/visibleLayout')({
  component: () => (
    <div>
      <p>this layout is visible in the uRL</p>
      <Link to={'/(hidden-folder)/layouts/visibleLayout/bar'}>bar</Link>
      <Link to={'/(hidden-folder)/layouts/visibleLayout/foo'}>foo</Link>
      <hr />
      <Outlet />
    </div>
  ),
  notFoundComponent: () => <div>404</div>,
});
