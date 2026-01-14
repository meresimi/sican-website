import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ClimateStats from '@/components/ClimateStats'
import AboutPreview from '@/components/AboutPreview'
import FocusAreas from '@/components/FocusAreas'
import LatestNews from '@/components/LatestNews'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ClimateStats />
      <AboutPreview />
      <FocusAreas />
      <LatestNews />
      <CallToAction />
      <Footer />
    </main>
  )
}
