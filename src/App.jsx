import MapNavigation from './components/MapNavigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden relative parchment">
      {/* Treasure Map Corner Decorations */}
      <div className="fixed top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-accent-500/40 pointer-events-none z-10"></div>
      <div className="fixed top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-accent-500/40 pointer-events-none z-10"></div>
      <div className="fixed bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-accent-500/40 pointer-events-none z-10"></div>
      <div className="fixed bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-accent-500/40 pointer-events-none z-10"></div>
      
      {/* Compass Rose in corner */}
      <div className="fixed top-20 left-8 text-accent-400/20 text-6xl pointer-events-none z-10 hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
        ✦
      </div>
      
      <MapNavigation />
      <main className="relative z-0 pt-20">
        <Hero />
        <div className="treasure-path">
          <About />
        </div>
        <div className="treasure-path">
          <Skills />
        </div>
        <div className="treasure-path">
          <Experience />
        </div>
        <div className="treasure-path">
          <Projects />
        </div>
        <div className="treasure-path">
          <EducationAchievements />
        </div>
        <div className="treasure-path">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
