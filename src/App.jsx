import { AboutMe } from "./components/AboutMe";
import { BannerSection } from "./components/BannerSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectList } from "./components/Projects";
import { TechnologiesList } from "./components/Technologies";
import './styles/index.css';

function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <AboutMe />
      <TechnologiesList />
      <ProjectList />
      <Footer />
    </>
  )
}

export default App
