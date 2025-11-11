import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className=''>
    <Hero/>
    <Profile/>
    <h1>Projects</h1>
    <h1>Skills</h1>
    <h1>Contact</h1>
  </div>
  )
}
