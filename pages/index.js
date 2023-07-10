import Head from 'next/head'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import HeroC from "../Components/HeroC"
import HeroD from "../Components/HeroD"
import HeroE from "../Components/HeroE"
import Tab from "../Components/Tab"
import Benefits from "../Components/Benefits"
import Quarter from "../Components/Quarter"
import HeroComponent from '../Components/Herob'
import Dropdown from '../Components/Dropdown'
import Footer from '../Components/Footer'
import Marquee from '../Components/Marque'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Everest</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Navbar />
        <Marquee/>
        <Hero />
        <Benefits/>
        <HeroC />
        <HeroD />

        
        {/* <HeroComponent />
        <Tab/>
        <HeroE/>
        <Quarter/>
        <Dropdown/>
        <Hero />
        <Footer/> */}
      </main>

    </div>
  )
}