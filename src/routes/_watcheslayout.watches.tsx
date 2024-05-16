import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_watcheslayout/watches')({
  component: () => <div>Watch Page</div>,
});
