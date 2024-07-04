import { createFileRoute } from '@tanstack/react-router';
import { Form } from '../../apps/_reacthookform';

export const Route = createFileRoute('/form/')({
  component: Form,
});
