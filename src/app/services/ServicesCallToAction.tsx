import { Once } from "@/components/motion/Once";
import { OnceItem, Stagger } from "@/components/motion/Stagger";
import Button from "@/components/Button/Button";
import { IconSparklesFilled } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";

export default function ServicesCallToAction() {
    return (
        <Once className="section">
            <Stagger className="content alignCenter">
                <Tilt>
                    <OnceItem>
                        <h2 className="statement">Ready to build it properly?</h2>
                    </OnceItem>
                    <OnceItem>
                        <p className="subheading">Tell me about your project and let’s define the right approach from the start.</p>
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
