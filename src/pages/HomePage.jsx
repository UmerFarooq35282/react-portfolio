import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import HeroContent from "../components/home/HeroContent";
import ProjectSection from "../components/home/ProjectSection";
import SkillsSection from "../components/home/SkillsSection";

function HomePage() {
  return (
    <>
      <Header />
      <HeroContent />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
