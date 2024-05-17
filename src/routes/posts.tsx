import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/posts')({
  component: () => (
    <div>
      <h1>Posts page</h1>
      <p>thes are all of the posts from the websites regarding blah </p>
      <Outlet />
    </div>
  ),
});
