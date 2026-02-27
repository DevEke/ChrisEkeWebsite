import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { Tilt } from "@/components/motion/Tilt";

export default function AboutHero() {
    return (
        <Once className="section">
            <Stagger className="content alignCenter">
                <Tilt>
                    <OnceItem>
                        <h1>
                            The Person<br/>
                            Behind The Work
                        </h1>
                    </OnceItem>
                    <OnceItem>
                        <p className="subheading">A look at the thinking and standards that shape every project.</p>
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
