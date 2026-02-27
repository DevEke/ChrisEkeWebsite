import AboutHero from "./AboutHero";
import AboutBio from "./AboutBio";
import AboutStandards from "./AboutStandards";
import AboutCallToAction from "./AboutCallToAction";

export default function AboutPage() {
    return (
        <main className="pageWrapper">
            <AboutHero />
            <AboutBio />
            <AboutStandards />
            <AboutCallToAction />
        </main>
    )
}
