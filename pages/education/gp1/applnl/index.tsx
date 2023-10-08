import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewANl } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import ApplnlEx from '@/pages/exercises/gp1/applnlex';
// import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const ApplNl = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Applying Newton&#39;s laws
            </h1>
            <br></br> 
            <ModoverviewANl />
            <br /> 
            <LearnGoal />
            <h2> 
                Introduction 
            </h2>
                <p> 
                    Now that we have covered Newton&#39;s laws in theory, we can apply them. 
                </p> 
            <h2 className={style.h2SectionColor} id="flaw">
                1. Using the first law
            </h2>
                <p> 
                   Newton&#39;s first law states that an object in motion remains in motion unless acted on by another. In order to use this law, let&#39;s consider some simple examples. First, consider a block moving on a sheet of ice to the right at 2 m/s. There is no friction, and there are no net external forces acting. What is the change in displacement of the block after 3 seconds?
                </p> 
                <h3 className={style.h3num}>
                    1.1
                </h3>
                <h3 className={style.h3text}>
                    Equilibrium
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.1.1 Equilibrium
                    </h4>
                
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
                <p>
                    The third law states that every force has a reaction force. 
                </p>
                <h3 className={style.h3num}>
                    3.1 
                </h3>
                <h3 className={style.h3text}>
                    Reaction forces
                </h3>
                    <h4>
                        &nbsp; &nbsp; 3.1.1 Reaction forces
                    </h4>
            <h2 className={style.h2SectionColor} id="circ">
                4. Dynamics of circular motion
            </h2>
                <p>
                    Some parts of circular motion are the same as linear motion, but other parts are different. 
                </p>
                <h3 className={style.h3num}>
                    4.1
                </h3>           
                <h3 className={style.h3text}>
                    Going around a curve
                </h3>
                    <h4>
                        &nbsp; &nbsp; 4.1.1 Rouding a curve
                    </h4>
            <br />
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <ApplnlEx />
            <br></br>
            <br></br>
            {/* <OnedmQz /> */}
            <br />
            <br /> 
            <Link href="/education/gp1/wke" className={style.backtoLink}>Work and kinetic energy &#10140;</Link>  
             <br />  
             <br />                             
             <Helpful />
        </>
    );
}

export default ApplNl;