import Link from 'next/link';
import EUKVid from '@/public/videos/gp1/euk';
import style from '@/styles/general.module.css';
import { ModoverviewPu } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import PuEx from '@/pages/exercises/gp1/puex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const PU = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Potential Energy and Energy Conservation
            </h1>
            <br></br>
            <ModoverviewPu />
<br /> 
<LearnGoal />
<h2> 
Introduction 
</h2> 
            <br></br>
<p> 
    Proceeding from work and kinetic energy we dive into energy more generally. We discuss the different types and the theory of the conservation of energy. 
</p> 
<br /> 
<EUKVid /> 
<br />

<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of potential energy &#38; energy conservation  
</h2>
<p> 
 The domain of potential energy and energy conservation is... 
 </p>
<br /> 
<br />
            <h2 className={style.h2SectionColor} id="rev">
                1. Review of energy
            </h2>
                <p> 
                    It is difficult to define what energy actually is. A way to think about it, though, is that energy is a state associated with some system. <em> The train has this much kinetic energy. The potential energy of the earth-satellite system changes this much. The &#39;mass&#39; has this much energy. </em> It is useful to think about a system in terms of energy because then you can do things with the system, like work. 
                </p>
                <p>
                    There are different types of energy. For example...
                </p>
            <h3 className={style.h3num}>
                1.1 
            </h3>
            <h3 className={style.h3text}>
                Potential energy
            </h3>
                    <h4>
                        &nbsp; &nbsp; 1.1.1 Elastic 
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.1.2 Gravitational
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.1.3 Other types
                    </h4>
                <h3 className={style.h3num}>
                    1.2 
                </h3>
                <h3 className={style.h3text}>
                    Kinetic energy
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.2.1 Kinetic energy
                    </h4>
                <h3 className={style.h3num}>
                    1.3 
                </h3>
                <h3 className={style.h3text}>
                    Work
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.3.1 Kinetic energy
                    </h4>
            <h2 className={style.h2SectionColor} id="cons">
                2. Conservation of energy
            </h2>
            <br></br>
            <br></br>
                <p>
                    Conservation of energy is one of the most fundamental aspects of physics. Studying this principle will give us a paradigm to solve physics problems. 
                    Now, strictly speaking, energy is always conserved. Whether the system interacts only via conservative forces, 
                    we&#39;ll get into this below, or whether energy is &#34;lost&#34; to heat, energy is always conserved.&#42; 
                </p>
                <h3 className={style.h3num}>
                    2.1 
                </h3>
                <h3 className={style.h3text}>
                    Conservative forces
                </h3>
                <p>
                    Conservative forces are forces where, when acting in a system, we can &#34;get the energy back.&#34; 
                    Examples are the gravitational force and the electric force.
                </p>
                <h3 className={style.h3num}>
                    2.2
                </h3>
                <h3 className={style.h3text}>
                    Non-conservative forces
                </h3>
                <p>
                    Non-conservative forces are forces where, when acting, we cannot &#34;get the energy back.&#34; An example is friction. 
                    
                </p>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="energy">
                3. Energy diagrams
            </h2>
            <p>
                One way to visualize energy is to use a diagram.
            </p>
            <h3 className={style.h3num}>
                3.1 
            </h3>
                <h3 className={style.h3text}>
                    Plots
                </h3>
                    <h4>
                        &nbsp; &nbsp; 3.1.1 Plots 
                    </h4>
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
            <br /> 
            <Link href="/education/gp1/pmv" className={style.backtoLink}>Momentum, impulse, &#38; collisions &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default PU;