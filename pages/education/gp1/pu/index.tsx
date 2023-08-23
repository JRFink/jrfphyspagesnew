import Link from 'next/link';
import EUKVid from '@/public/videos/gp1/euk';
import style from '@/styles/general.module.css';
import { ModoverviewPu } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import PuEx from '@/pages/exercises/gp1/puex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
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
            <p> 
                It is difficult to give a definition of what energy actually is. A way to think about it though is that it is a state associated with some system. <em> The train has this much kinetic energy. The potential energy of the earth-satellite system changes this much. The &#39;mass&#39; has this much emergy. </em>
            </p>
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
            <br></br>
            <br></br>
                <p>
                    Conservation of energy is one of the most fundamental aspects of physics; maybe the most fundamental. 
                    I&#39;m still researching. Nonetheless, studying this principle will give us a paradigm to solve physics problems. 
                    Now, stricly speaking energy is always conserved. Whether the system interacts only via conservative forces, 
                    we&#39;ll get into this below, or whether energy is &#34;lost&#34; to heat, energy is always conserved.&#42; 
                </p>
                <h3>
                    2.1 Conservative forces
                </h3>
                <p>
                    Conservative forces are forces where, when acting in a system, we can &#34;get the energy back.&#34; 
                    Examples are the gravitational force and the electric force.
                </p>
                <h3>
                    2.2 Non-conservative forces
                </h3>
                <p>
                    Non-conservative forces are forces where, when acting, we cannot &#34;get the energy back.&#34; An example is friction. 
                    
                </p>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="energy">
                3. Energy diagrams
            </h2>
            <h3>
                3.1 Plots
            </h3>
            <Summary />
            <p>
                <br></br>
                &#42; Why?
            </p>
            <br></br>
            <br></br>
            <br></br>
            <PuEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default PU;