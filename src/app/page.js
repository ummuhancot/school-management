import { Welcome } from '@/components/about/Welcome'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
import { Slider } from '@/components/home/Slider'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import { Spacer } from '@/components/spacer/Spacer'
import React from 'react'

const Page = () => {
  return (
    <>
      <Slider/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      <FeaturedCourses/>
      <Spacer/>
      <UpcomingEvents/>
      <Spacer/>
    </>
  )
}

export default Page