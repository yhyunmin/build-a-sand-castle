import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_wrapper')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <h1>generic wraaper component</h1>
      <hr />
      <Outlet />
    </div>
  );
}
