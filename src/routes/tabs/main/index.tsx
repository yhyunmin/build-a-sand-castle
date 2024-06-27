import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tabs/main/')({
  component: () => <div>Hello /tabs/main/!</div>
})