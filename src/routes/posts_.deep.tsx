import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/deep')({
  component: () => (
    <div>
      <h2>Title of my post</h2>
      <p>This is the body of my post</p>
      <Link to={'/posts/'}>Post Page</Link>
    </div>
  ),
});
