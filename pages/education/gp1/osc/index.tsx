import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewOsc } from '@/pages/components/modoverview';
import OscEx from '@/pages/exercises/gp1/oscex';
import OnedmQz from '@/pages/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Oscillations
            </h1>
            <ModoverviewOsc />
                <h2 className={style.h2SectionColor} id="desc">
                    1. Describing oscillations 
                </h2>
                    <h3>
                        1.1 Types of oscillations
                    </h3>
                        <h4>
                            1.1.1 Simple harmonic motion
                        </h4>
                            <h4>
                                1.1.1.1 Hooke&#39;s law
                            </h4>
                            <h4>
                                1.1.1.2 Pure
                            </h4>
                            <h4>
                                1.1.1.3 Damped
                            </h4>
                            <h4>
                                1.1.1.4 Forced
                            </h4>
                            <h4>
                                1.1.1.5 Resonance
                            </h4>
                        <h4>
                            1.1.2 Chaotic 
                        </h4>
                <h2 className={style.h2SectionColor} id="conn">
                    2. Connection to circular motion
                </h2>
                    <h3>
                        2.1 Simple harmonic
                    </h3>
                <h2 className={style.h2SectionColor} id="en">
                    3. Energy in oscillations
                </h2>
                    <h3>
                        3.1 Simple harmonic 
                    </h3>
                <h2 className={style.h2SectionColor} id="ex">
                    4. Examples of oscillations 
                </h2>
                    <h3>
                        4.1 Simple harmonic 
                    </h3>
                        <h4>
                            4.1.1 Pendulums
                        </h4>
                            <h4>
                                4.1.1.1 Simple pendulum
                            </h4>
                            <h4>
                                4.1.1.2 Physical pendulum
                            </h4>
                            <h4>
                                4.1.1.3 Double pendulum
                            </h4>
            <br></br>
            <br></br>
            <OscEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default Osc;