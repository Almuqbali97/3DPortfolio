import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {
  // window.addEventListener('wheel', (event) => {
  //   event.preventDefault();
  //   const scrollContainer = document.querySelector('.scroll-container');
  //   scrollContainer.scrollBy({
  //     top: event.deltaY < 0 ? -window.innerHeight : window.innerHeight,
  //     behavior: 'smooth'
  //   });
  // }, { passive: false });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary scroll-container">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center scroll-section">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
