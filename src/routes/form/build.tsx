import { createFileRoute } from '@tanstack/react-router';
import Build from '../../apps/_reacthookform/components/Build.tsx';

export const Route = createFileRoute('/form/build')({
  component: Build,
});
