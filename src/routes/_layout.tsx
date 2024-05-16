import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <h1>My Layout Component</h1>
      <hr />
      <Outlet />
    </div>
  );
}
