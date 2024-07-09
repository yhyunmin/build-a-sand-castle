import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden-folder)/visibleLayout')({
  component: () => <div>Hello /(hidden-folder)/visibleLayout!</div>
})