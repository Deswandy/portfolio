import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className=''>
    <Hero/>
    <Profile/>
    <Projects/>
    <h1>Skills</h1>
    <h1>Contact</h1>
  </div>
  )
}
