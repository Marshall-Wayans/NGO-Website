import React, { useEffect } from 'react'
import HeroSection from '../sections/HeroSection'
import MissionValues from '../sections/MissionValues'
import OurVision from '../sections/OurVision'
import HistoryTimeline from '../sections/HistoryTimeline'
import ImpactStats from '../sections/ImpactStats'
import Testimonials from '../sections/Testimonials'
import Patners from '../sections/Patners'
import GetInvolvedPreview from '../sections/GetInvolvedPreview'

export default function Home() {
  useEffect(() => { window.scrollTo(0,0) }, [])
  return (
    <div>
      <HeroSection />
      <MissionValues />
      <OurVision />
      <HistoryTimeline />
      <ImpactStats />
      <Testimonials />
      <Patners />
      <GetInvolvedPreview />
    </div>
  )
}