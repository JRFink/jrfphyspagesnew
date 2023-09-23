import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewOsc } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import OscEx from '@/pages/exercises/gp1/oscex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Oscillations
            </h1>
            <ModoverviewOsc />
            <br /> 
            <LearnGoal />
            <h2> 
            Introduction 
            </h2>
            <p> 
            Proceeding from fluids we move to oscillations. This is a foundational topic in physics. Many things in our world oscillate. For example, a pendulum swings back and forth; a building sways slightly in the wind, and financial markets are always going up and down. Studying oscillations will help us characterize this motion. 
            </p> 
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                    Domain of oscillations  
            </h2>
            <p> 
            The domain of oscillations is... 
            </p>
            <br /> 
            <br />
                <h2 className={style.h2SectionColor} id="desc">
                    1. Describing oscillations 
                </h2>
                <p>
                    Oscillations occur in many areas of our world.
                </p>
                <p> 
                     We describe oscillations in the solution to the differential equation   
                 </p> 
                 <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}> f&#40;q&#41; = - a &nbsp; f &#39; &#39; &#40;q &#41;  </div> 
                     <div className={style.equationNumber}>&#40;1&#41;</div> 
                 </div> 
                <p>
                where a is a positive constant.
                </p>
                 <br />
                <h3 className={style.h3num}>
                    1.1 
                </h3>
                <h3 className={style.h3text}>
                    Types of oscillations
                </h3>
                        <h4>
                            &nbsp; &nbsp; 1.1.1 Simple harmonic motion
                        </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 1.1.1.1 Hooke&#39;s law
                            </h4>
<p> 
                     We can characterize Hooke&#39;s law by   
                 </p> 
                 <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}> <b>F</b> = - c &nbsp; &#916; r  </div> 
                     <div className={style.equationNumber}>&#40;2&#41;</div> 
                 </div> 
                <p> We apply Newton&#39;s second law amd obtain </p> 
                <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}> <b>F</b> = - c &nbsp; &#916; r = m r &#39; &#39; &#40;t &#41; </div> 
                     <div className={style.equationNumber}>&#40;3&#41;</div> 
                 </div> 

                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 1.1.1.2 Pure
                            </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 1.1.1.3 Damped
                            </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 1.1.1.4 Forced
                            </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 1.1.1.5 Resonance
                            </h4>
                        <h4>
                            &nbsp; &nbsp; 1.1.2 Chaotic 
                        </h4>
                <h2 className={style.h2SectionColor} id="conn">
                    2. Connection to circular motion
                </h2>
                    <p>
                        Connection...
                    </p>
                    <h3 className={style.h3num}>
                        2.1 
                    </h3>
                    <h3 className={style.h3text}>
                        Simple harmonic
                    </h3>
                        <h4>
                            &nbsp; &nbsp; 2.1.1 Simple harmonic...
                        </h4>
                <h2 className={style.h2SectionColor} id="en">
                    3. Energy in oscillations
                </h2>
                    <p>
                        Energy... 
                    </p>
                    <h3 className={style.h3num}>
                        3.1 
                    </h3>
                    <h3 className={style.h3text}>
                        Simple harmonic 
                    </h3>
                        <h4>
                            &nbsp; &nbsp; 3.1.1 Simple harmonic...
                        </h4>
                <h2 className={style.h2SectionColor} id="ex">
                    4. Examples of oscillations 
                </h2>
                    <p>
                        Examples...
                    </p>
                    <h3 className={style.h3num}>
                        4.1 
                    </h3>
                    <h3 className={style.h3text}>
                        Simple harmonic 
                    </h3>
                        <h4>
                            &nbsp; &nbsp; 4.1.1 Pendulums
                        </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 4.1.1.1 Simple pendulum
                            </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 4.1.1.2 Physical pendulum
                            </h4>
                            <h4>
                                &nbsp; &nbsp; &nbsp; &nbsp; 4.1.1.3 Double pendulum
                            </h4>
<Summary />
<br />
            <br></br>
            <OscEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/wm" className={style.backtoLink}>Wave motion &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Osc;