import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form/edit/$id')({
  component: () => <div>Hello /form/edit/$id!</div>
})