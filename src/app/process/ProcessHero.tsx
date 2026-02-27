import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { Tilt } from "@/components/motion/Tilt";

export default function ProcessHero() {
    return (
        <Once as="section" className="section">
            <Stagger className="content alignCenter">
                <Tilt>
                    <OnceItem>
                        <h1>
                            A structured path<br/>
                            from concept to launch.
                        </h1>
                    </OnceItem>
                    <OnceItem>
                        <p className="subheading">This is where we explain how every project moves from initial clarity through disciplined execution and deployment.</p>
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
