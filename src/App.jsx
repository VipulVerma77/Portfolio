import { NavBar } from "./components"
import { AppShowcase, Contact, Experience, FeatureCards, Footer, Hero, LogoShowcase, TechStack, Testimonials } from "./section"


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <AppShowcase/>
      <LogoShowcase/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
