import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: PostsPage,
});

function PostsPage() {
  return (
    <>
      <div>
        <h2>Title of my post</h2>
        <p>This is the body of my post</p>
        <Link to={'/posts/deep'}>View Post</Link>
      </div>

      <div>
        <h2>Title of my post</h2>
        <p>This is the body of my post</p>
        <Link to={'/posts/deep'}>View Post</Link>
      </div>
      <div>
        <h2>Title of my post</h2>
        <p>This is the body of my post</p>
        <Link to={'/posts/deep'}>View Post</Link>
      </div>
      <div>
        <h2>Title of my post</h2>
        <p>This is the body of my post</p>
        <Link to={'/posts/deep'}>View Post</Link>
      </div>
    </>
  );
}
