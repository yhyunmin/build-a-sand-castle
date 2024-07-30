import { createFileRoute } from '@tanstack/react-router'
import { Recursive } from '@/apps/_recursive';

export const Route = createFileRoute('/recursive/')({
  component: Recursive
})
