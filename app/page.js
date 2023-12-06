import Header from './components/Header'
import MainSection from './components/MainSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import InfoCard from './components/InfoCard'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen font-base overflow-hidden">
      <Header />      
      <MainSection />
      <InfoCard />
      <InfoSection />
      <Footer />
    </main>
  )
}
