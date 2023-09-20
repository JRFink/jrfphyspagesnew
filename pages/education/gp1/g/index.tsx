import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewG } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import GEx from '@/pages/exercises/gp1/gex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Gravity = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Gravity
            </h1>
            <br></br>
            <ModoverviewG />
            <br />
<LearnGoal />
<h2> 
Introduction 
</h2>
<p> 
     Gravity is a large subject, but undoubtedly something you interact with every day. <em> Why does an apple fall? Why does the moon orbit the earth? Why do some galaxies spin? </em> 
</p>
<p> 
     In the previous section, we learned about taylor expansion. We learned that we can use this approach to solve problems when the change in a physical system is small. 
</p>
<p> 
     Consider again the apple falling. The apple fits in your hand. 
</p> 
<p>
     Have you ever been around the world? To China? India? Hawaii? 
</p> 
<p> 
     The earth is large. Throw an apple up. What is the height it rises compared to the size of the earth? 
</p>   
<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of gravity 
</h2>
<p> 
 The domain of gravity is... 
 </p>
<br /> 
<br />            
            <h2 className={style.h2SectionColor} id="field">
                1. Gravitational field and force
            </h2>
                <p>
                    The gravitational field proceeds from the mass of an object, and the gravitational force 
                    is a result of the interaction of two masses. 
                </p>
            <h3 className={style.h3num}>
                1.1 
            </h3>
            <h3 className={style.h3text}>
                Gravitational field
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.1.1 Gravitational field
                </h4>
            <h3 className={style.h3num}>
                1.2
            </h3>
            <h3 className={style.h3text}>
                Gravitational force
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.2.1 Gravitational force
                </h4>
            <h2 className={style.h2SectionColor} id="potent">
                2. Gravitational potential
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="near">
                3. Gravitation near earth&apos;s surface
            </h2>
            <p> 
            Consider again the gravitational force. Think about the changes in r when you move from 2m above the ground to ground level. </p> 
            <br></br>
            <h2 className={style.h2SectionColor} id="mot">
                4. Motion of satellites
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="kep">
                5. Kepler&apos;s laws
            </h2>
                <p>
                    Kepler&#39;s laws...
                </p>
            <h3 className={style.h3num}>
                5.1
            </h3>
            <h3 className={style.h3text}>
                Kepler&#39;s first law
            </h3>
                <h4>
                    &nbsp; &nbsp; 5.1.1 Gravitational field
                </h4>
            <h3 className={style.h3num}>
                5.2
            </h3>
            <h3 className={style.h3text}>
                Kepler&#39;s second law
            </h3>
                <h4>
                    &nbsp; &nbsp; 5.1.2 Gravitational field
                </h4>
            <h3 className={style.h3num}>
                5.3
            </h3>
            <h3 className={style.h3text}>
                Kepler&#39;s third law
            </h3>
                <h4>
                    &nbsp; &nbsp; 5.3.1 Gravitational field
                </h4>
            <h2 className={style.h2SectionColor} id="grav">
                6. Einstein and gravity
            </h2>
<Summary /> 
<br /> 
            <br></br>
            <br></br>
            <GEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/fluid" className={style.backtoLink}>Fluids &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default Gravity;