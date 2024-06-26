import { createFileRoute } from '@tanstack/react-router';
import { Tab } from '../../apps/_tab';

export const Route = createFileRoute('/tabs/')({
  component: Tab,
});
