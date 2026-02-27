import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { Tilt } from "@/components/motion/Tilt";

export default function HomePhilosophy() {
    return (
       <Once id="homePhilosophy" as="section" className="section">
            <Stagger className="content">
                <Tilt>
                    <OnceItem>
                        <h2 className="statement">
                            Standards are not features.<br />
                            They are foundations.
                        </h2>
                    </OnceItem>
                    <OnceItem>
                        <p className="subheading">
                            Performance, clarity, and structure are not upgrades. They are the baseline for any business that expects its website to work.
                        </p>
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
