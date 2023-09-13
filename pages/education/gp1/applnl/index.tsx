import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewANl } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import FlawEx from '@/pages/exercises/gp1/flawex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const ApplNl = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Applying Newton&#39;s laws
            </h1>
            <br></br> 
            <ModoverviewANl />
            {/* <p>
                Applying Newton&#39;s laws is where you master them and really start to understand how they work. 
            </p> */}
            <h2 className={style.h2SectionColor} id="flaw">
                1. Using the first law
            </h2>
                <h3>
                    1.1 Equilibrium
                </h3>
                <p> 
                   Newton&#39;s first law states that an object in motion remains in motion unless acted on by another. In order to use this law, let&#39;s consider some simple examples. First, consider a block moving on a sheet of ice to the right at 2 m/s. There is no friction, and there are no net external forces acting. What is the change in displacement of the block after 3 seconds?
                </p> 
            <h2 className={style.h2SectionColor} id="slaw">
                2. Using the second
            </h2>
                <p> 
                    There are many applications of the second law. 
                    One could argue that everything in classical mechanics is an example of the second law. 
                </p> 
                <h3 className={style.h3num}>
                    2.1
                </h3>
                <h3 className={style.h3text}>
                    Force as function of position
                </h3>
                    <h4>
                        &nbsp; &nbsp; 2.1.1 Solving the differential equation
                    </h4>
                <h3 className={style.h3num}>
                    2.2
                </h3>
                <h3 className={style.h3text}>
                    Force as function of time
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.2.1 Solving the differential equation
                    </h4>
                <h3 className={style.h3num}>
                    2.3
                </h3>
                <h3 className={style.h3text}>
                    Force as function of something else
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.3.1 General independent variable
                    </h4>
                <h3 className={style.h3num}>
                    2.4
                </h3>
                <h3 className={style.h3text}>
                    Constant forces
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.4.1 Constant forces
                    </h4>
                <h3 className={style.h3num}>
                    2.5
                </h3>
                <h3 className={style.h3text}>
                    Friction
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.5.1 Static
                    </h4>
                    <h4>
                    &nbsp; &nbsp; 2.5.2 Kinetic
                    </h4>
                    <h4>
                    &nbsp; &nbsp; 2.5.3 Rolling
                    </h4>
                <h3 className={style.h3num}>
                    2.6
                </h3>
                <h3 className={style.h3text}>
                    Tension
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.6.1 Tension
                    </h4>
                <h3 className={style.h3num}>
                    2.7
                </h3>
                <h3 className={style.h3text}>
                    Free-fall with approximate a
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.7.1 Free fall
                    </h4>
                <h3 className={style.h3num}>
                    2.8
                </h3>
                <h3 className={style.h3text}>
                    Drag force
                </h3>
                    <h4>
                    &nbsp; &nbsp; 2.8.1 Drag force
                    </h4>
            <h2 className={style.h2SectionColor} id="third">
                3. Using the third
            </h2>
                <h3>
                    3.1 Reaction forces
                </h3>
            <h2 className={style.h2SectionColor} id="circ">
                4. Dynamics of circular motion
            </h2>
                <h3>
                    4.1 Going around a curve
                </h3>
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <FlawEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default ApplNl;