import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
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
    <Skills/>
    <h1>Contact</h1>
  </div>
  )
}
