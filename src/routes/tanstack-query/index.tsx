import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tanstack-query/')({
  component: () => <div>Hello /tanstack-query/!</div>
})