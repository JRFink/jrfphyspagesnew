import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewG } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import GEx from '@/pages/exercises/gp1/gex';
import Quizheading from '@/pages/components/quizHeading';
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
            <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
            <br />
            <p> 
                Drop an apple from a height <em>h</em>. How long till it hits the floor?  
            </p>
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
                <p> 
                    The gravitational force is defined by  
                </p> 
            <br /> 
                <div className={style.equationBox}> 
                    <div className={style.equation}><b>F</b> &nbsp; = 
                        G &nbsp; m<span><sub>1</sub></span>m<span><sub>2</sub></span>/ r<span><sup>2</sup></span>
                    </div> 
                <div className={style.equationNumber}>&#40;1&#41;</div> 
                </div> 
            <p> 
                A mass subject to the gravitational force is subject to 
            </p>
            <br /> 
                <div className={style.equationBox}> 
                    <div className={style.equation}><b>F</b> &nbsp; = G &nbsp; m<span><sub>1</sub></span>m<span><sub>2</sub></span> / r<span><sup>2</sup></span> = m r &#39; &#39; &#40; t &#41;
                    </div> 
                    <div className={style.equationNumber}>&#40;2&#41;</div> 
                </div> 
                <br />
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
            <h2 className={style.h2SectionColor} id="notnear">
                4. Gravitation at distance of satellites
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="mot">
                5. Motion of satellites
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="kep">
                6. Kepler&apos;s laws
            </h2>
                <p>
                    Kepler&#39;s laws...
                </p>
            <h3 className={style.h3num}>
                6.1
            </h3>
            <h3 className={style.h3text}>
                Kepler&#39;s first law
            </h3>
                <h4>
                    &nbsp; &nbsp; 5.1.1 Gravitational field
                </h4>
            <h3 className={style.h3num}>
                6.2
            </h3>
            <h3 className={style.h3text}>
                Kepler&#39;s second law
            </h3>
                <h4>
                    &nbsp; &nbsp; 5.1.2 Gravitational field
                </h4>
            <h3 className={style.h3num}>
                6.3
            </h3>
            <h3 className={style.h3text}>
                Kepler&#39;s third law
            </h3>
                <h4>
                    &nbsp; &nbsp; 5.3.1 Gravitational field
                </h4>
            <h2 className={style.h2SectionColor} id="grav">
                Einstein and gravity
            </h2>
            <br />
            <br />
            <Summary /> 
            <br /> 
            <br></br>
            <br></br>
            <GEx />
            <br></br>
            <br></br>
            <Quizheading />
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