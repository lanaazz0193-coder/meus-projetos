import { useEffect } from 'react';
import { useLocation } from 'react-router';

import HeroSection from '../../components/sections/Portal/HeroSection';
import AboutSection from '../../components/sections/Portal/AboutSection';
import ProjectSection from '../../components/sections/Portal/ProjectSection';
import ContactSection from '../../components/sections/Portal/ContactSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // Fica escutando as mudanças na URL

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default Home;