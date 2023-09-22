import Link from 'next/link';
import style from '@/styles/general.module.css';
import RotVid from '@/public/videos/gp1/rm';
import { ModoverviewRm } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import RmEx from '@/pages/exercises/gp1/rmex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Rm = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Rotational Motion 
            </h1>
            <br></br>
            <ModoverviewRm />
            <br /> 
            <LearnGoal />
            <h2> 
            Introduction 
            </h2>
            <br />
            <RotVid />
   
            <p> 
                Moving moving momentum and collisions we proceed to rotational motion. 
            </p> 
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                    Domain of rotational motion 
            </h2>
            <p> 
            The domain of rotational motion is... 
            </p>
            <br /> 
            <br />
            <br /> 
            <br />
            <h2 className={style.h2SectionColor} id="ang">
                1. Angular kinematics
            </h2>
                <p>
                    Angular kinematics...
                </p>
            <h3 className={style.h3num}>
                1.1 
            </h3>
            <h3 className={style.h3text}>
                Angular position
            </h3>
            <br />
            <h3 className={style.h3num}>
                1.2
            </h3>
            <h3 className={style.h3text}>
                Angular velocity
            </h3>
            <br />
            <h3 className={style.h3num}>
                1.3
            </h3>
            <h3 className={style.h3text}>
                Angular acceleration
            </h3>
            <br /> 
            {/* <div className={style.equationBox}>
                <div className={style.equation}></div>
                <div className={style.equationNumber}></div>
            </div> */}
            <h3 className={style.h3num}>
                1.4
            </h3>
            <h3 className={style.h3text}>
                Connecting uniform and non-uniform circular motion
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.4.1 Connecting
                </h4>
            <h2 className={style.h2SectionColor} id="rel">
                2. Relating angular and linear kinematics
            </h2>
            <br />
            <br />
            <h3 className={style.h3num}>
                2.1
            </h3>
            <h3 className={style.h3text}>
                Position and angular position
            </h3>
            <p>
                    Angular position is given by
                </p>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>s = r &#952;</div>
                    <div className={style.equationNumber}>&#40;1&#41;</div>
                </div>
                <br />
            <h3 className={style.h3num}>
                2.2
            </h3>
            <h3 className={style.h3text}>
                Speed and angular speed
            </h3>
                <p>
                    The relationship is given by
                </p>
                <br /> 
                <div className={style.equationBox}>
                    <div className={style.equation}>v = r &#969;</div>
                    <div className={style.equationNumber}>&#40;2&#41;</div>
                </div>
            <br />
            <h3 className={style.h3num}>
                2.3
            </h3>
            <h3 className={style.h3text}>
                Acceleration and angular acceleration
            </h3>
                <p>
                    The relationships are given by
                </p>
                <br /> 
                <div className={style.equationBox}>
                    <div className={style.equation}>a &nbsp;<span><sub>rad</sub></span> &nbsp; = 
                    &nbsp; v<span><sup>2</sup></span> / r = &#969;<sup>2</sup> &nbsp;r</div>
                    <div className={style.equationNumber}></div>
                </div>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>a &nbsp;<span><sub>tan</sub></span> &nbsp; = r &#945;</div>
                    <div className={style.equationNumber}>&#40;3&#41;</div>
                </div>          
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="moment">
                3. Moments of inertia
            </h2>
            <p>
                Moments of inertia
            </p>
            <h3 className={style.h3num}>
                3.1 
            </h3>
            <h3 className={style.h3text}>
                Math
            </h3>
                <h4>
                    &nbsp; &nbsp; 3.1.1 Deriving moments
                </h4>
            <h3 className={style.h3num}>
                3.2
            </h3>
            <h3 className={style.h3text}>
                Parallel axis theorem
            </h3>
                <h4>
                    &nbsp; &nbsp; 3.2.1 Parallel axis theorem
                </h4>
            <br /> 
            <h2 className={style.h2SectionColor} id="en">
                4. Energy in rotational motion
            </h2>
            <br />
            <br />
                <h3 className={style.h3num}>
                    4.1
                </h3>
                <h3 className={style.h3text}>
                    Simple system
                </h3>
                <br />
                <h3 className={style.h3num}>
                    4.2
                </h3>
                <h3 className={style.h3text}>
                    Extended system
                </h3>
                <p>
                    The energy is given by 
                </p>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>E = 1/2 I &#969; <sup>2</sup></div>
                    <div className={style.equationNumber}>&#40;4&#41;</div>
                </div>
            <br />
            <br />
            <Summary /> 
            <br />
            <br />
            <br></br>
            <RmEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/trq" className={style.backtoLink}>Dynamics of rotational motion &#10140;</Link>  
             <br />  
             <br />            <Helpful />
        </>
    );
}

export default Rm;