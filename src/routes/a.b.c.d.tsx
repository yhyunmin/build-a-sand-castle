import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a/b/c/d')({
  component: () => <div>Hello /a/b/c/d!</div>
})