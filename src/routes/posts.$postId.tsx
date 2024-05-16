import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  // loader
  // loader: ({params}) => fetchPost(params.postId)
  component: PostComponent,
});

function PostComponent() {
  const { postId } = Route.useParams();
  console.log(postId);
  return <div>Post {postId}</div>;
}
