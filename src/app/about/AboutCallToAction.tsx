import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "@/components/Button/Button";
import { IconSparklesFilled } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";

export default function AboutCallToAction() {
    return (
        <Once className="section">
            <Stagger className="content alignCenter">
                <Tilt>
                    <OnceItem>
                        <h2 className="statement">Ready to build with<br /> intention?</h2>
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
