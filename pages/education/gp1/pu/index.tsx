import Link from 'next/link';
import EUKVid from '@/public/videos/gp1/euk';
import style from '@/styles/general.module.css';
import { ModoverviewPu } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import PuEx from '@/pages/exercises/gp1/puex';
import Helpful from '@/pages/components/helpful';

const PU = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Potential Energy & Energy Conservation
            </h1>
            <br></br>
            <ModoverviewPu />
            <br></br>
            <EUKVid />
            <br></br>
            <h2 className={style.h2SectionColor} id="rev">
                1. Review of energy
            </h2>
                <h3>
                    1.1 Potential energy
                </h3>
                    <h4>
                        1.1.1 Elastic 
                    </h4>
                    <h4>
                        1.1.2 Gravitational
                    </h4>
                    <h4>
                        1.1.3 Other types
                    </h4>
                <h3>
                    1.2 Kinetic energy
                </h3>
                <h3>
                    1.3 Work
                </h3>
            <h2 className={style.h2SectionColor} id="cons">
                2. Conservation of energy
            </h2>
                <h3>
                    2.1 Conservative forces
                </h3>
                <h3>
                    2.2 Non-conservative forces
                </h3>
            <h2 className={style.h2SectionColor} id="energy">
                3. Energy diagrams
            </h2>
            <h3>
                3.1 Plots
            </h3>
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <PuEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default PU;