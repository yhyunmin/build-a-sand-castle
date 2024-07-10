import { createFileRoute } from '@tanstack/react-router';
import { Shadcn } from '@/apps/_shadcn';

export const Route = createFileRoute('/shadcn')({
  component: Shadcn,
});
