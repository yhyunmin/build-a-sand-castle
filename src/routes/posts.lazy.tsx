import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/posts')({
  component: PostComponent,
});

function PostComponent() {
  return <>Posts</>;
}
