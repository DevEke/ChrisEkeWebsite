import HomeHero from "./Home/HomeHero";
import HomeCredibility from "./Home/HomeCredibility";
import HomeServices from "./Home/HomeServices";
import HomeWork from "./Home/HomeWork";
import HomeProcess from "./Home/HomeProcess";
import HomePhilosophy from "./Home/HomePhilosophy";
import HomeCallToAction from "./Home/HomeCallToAction";

export default function HomePage() {
  return (
    <main className="pageWrapper">
      <HomeHero />
      <HomeCredibility />
      <HomeServices />
      <HomeWork />
      <HomeProcess />
      <HomePhilosophy />
      <HomeCallToAction />
    </main>
  );
}
