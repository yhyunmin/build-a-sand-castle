import { createFileRoute } from '@tanstack/react-router';
import { AgGrid } from '../apps/_agGrid';

export const Route = createFileRoute('/ag-grid')({
  component: () => <AgGrid />,
});
