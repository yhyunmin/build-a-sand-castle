import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form/list/$id')({
  component: () => <div>Hello /form/list/$id!</div>
})