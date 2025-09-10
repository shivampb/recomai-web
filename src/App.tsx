import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FeaturesPage from './pages/FeaturesPage';

function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<><FeaturesPage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;