import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <h1>Hero</h1>
    <h1>Profile</h1>
    <h1>Projects</h1>
    <h1>Skills</h1>
    <h1>Contact</h1>
  </div>
  )
}
