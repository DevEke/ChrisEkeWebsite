import ServicesHero from "./ServicesHero";
import ServicesIncluded from "./ServicesIncluded";
import ServicesIdeal from "./ServicesIdeal";
import ServicesProcess from "./ServicesProcess";
import ServicesCallToAction from "./ServicesCallToAction";


export default function ServicesPage() {
    return (
        <main className="pageWrapper">
            <ServicesHero />
            <ServicesIncluded />
            <ServicesIdeal />
            <ServicesProcess />
            <ServicesCallToAction />
        </main>
    )
}
