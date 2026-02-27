import ProcessHero from "./ProcessHero"
import ProcessDiscover from "./ProcessDiscover";
import ProcessDefine from "./ProcessDefine";
import ProcessDesign from "./ProcessDesign";
import ProcessDevelop from "./ProcessDevelop";
import ProcessDeploy from "./ProcessDeploy";
import ProcessCallToAction from "./ProcessCallToAction";

export default function ProcessPage() {
    return (
        <main className="pageWrapper">
            <ProcessHero />
            <ProcessDiscover />
            <ProcessDefine />
            <ProcessDesign />
            <ProcessDevelop />
            <ProcessDeploy />
            <ProcessCallToAction />
        </main>
    )
}
