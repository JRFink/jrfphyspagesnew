import Link from 'next/link';
import style from '@/styles/general.module.css';
import RotVid from '@/public/videos/gp1/rm';
import { ModoverviewRm } from '@/pages/components/modoverview';
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
            <br></br>
            <RotVid />
            <br /> 
<p> 
     Moving moving momentum and collisions we proceed to rotational motion. 
</p> 
            <br /> 
            <br />
            <h2 className={style.h2SectionColor} id="ang">
                1. Angular velocity and acceleration
            </h2>
                <p>
                    Angular velocity...
                </p>
            <h3 className={style.h3num}>
                1.1 
            </h3>
            <h3 className={style.h3text}>
                Angular velocity
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.1.1 Angular velocity
                </h4>
            <h3 className={style.h3num}>
                1.2 
            </h3>
            <h3 className={style.h3text}>
                Angular acceleration
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.2.1 Angular acceleration
                </h4>
            <h3 className={style.h3num}>
                1.3
            </h3>
            <h3 className={style.h3text}>
                Connecting uniform and non-uniform circular motion
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.3.1 Connecting
                </h4>
            <h2 className={style.h2SectionColor} id="rel">
                2. Relating angular and linear kinematics
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="en">
                3. Energy in rotational motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="moment">
                4. Moments of inertia
            </h2>
            <p>
                Moments of inertia
            </p>
            <h3 className={style.h3num}>
                4.1 
            </h3>
            <h3 className={style.h3text}>
                Math
            </h3>
                <h4>
                    &nbsp; &nbsp; 1.1.1 Deriving moments
                </h4>
            <h3 className={style.h3num}>
                4.2
            </h3>
            <h3 className={style.h3text}>
                Parallel axis theorem
            </h3>
                <h4>
                    &nbsp; &nbsp; 4.2.1 Parallel axis theorem
                </h4>
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