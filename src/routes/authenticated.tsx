import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authenticated')({
  component: () => <div>Hello /authenticated!</div>
})