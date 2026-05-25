import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Services from "./Home/Services/Services";
import Process from "./Home/Process/Process";
import Work from "./Home/Work/Work";
import Skills from "./Home/Skills/Skills";
import Contact from "./Home/Contact/Contact";
import FAQ from "./Home/FAQ/FAQ";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.mainWrapper}>
      <Hero />
      <About />
      <Work />
      <Services />
      <Contact />
    </main>
  );
}
