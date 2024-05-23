import { createFileRoute } from '@tanstack/react-router';
import { LazyLoading } from '../../apps/_lazyLoading';

export const Route = createFileRoute('/lazy-loading/')({
  component: LazyLoading,
});
