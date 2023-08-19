import Link from 'next/link';
import style from '@/styles/general.module.css';
import RotVid from '@/public/videos/gp1/rm';
import { ModoverviewRm } from '@/pages/components/modoverview';
import RmEx from '@/pages/exercises/gp1/rmex';
import OnedmQz from '@/pages/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Rm = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Rotational Motion 
            </h1>
            <br></br>
            <ModoverviewRm />
            <br></br>
            <h2 className={style.h2SectionColor} id="ang">
                1. Angular velocity and acceleration
            </h2>
            <h3>
                1.1 Angular velocity
            </h3>
            <h3>
                1.2 Angular acceleration
            </h3>
            <h3>
                1.3 Connecting uniform and non-uniform circular motion
            </h3>
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
            <h3>
                4.1 math
            </h3>
            <h3>
                4.2 Parallel axis theorem
            </h3>
            <br></br>
            <RotVid />
            <br></br>
            <br></br>
            <RmEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default Rm;