import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "@/components/Button/Button";
import { IconSparklesFilled } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";

export default function ServicesHero() {
    return (
        <Once id="servicesHero" as="section" className="section">
            <Stagger className="content alignCenter">
                <Tilt>
                    <OnceItem>
                        <h1>
                            Where design meets<br/>
                            disciplined execution.
                        </h1>
                    </OnceItem>
                    <OnceItem>
                        <p className="subheading">A complete website build, thoughtfully designed and developed for businesses ready to invest in lasting quality.</p>
                    </OnceItem>
                    <OnceItem>
                        <Button
                            label="Start A Project"
                            Icon={IconSparklesFilled}
                            buttonType="primary"
                            style={{margin: "48px auto 0 auto"}}
                            route="/contact"
                            link
                        />
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
