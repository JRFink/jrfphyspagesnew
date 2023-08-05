import Link from 'next/link';
import RotVid from '@/public/videos/gp1/rm';
import style from '@/styles/general.module.css';
import RmEx from '@/pages/exercises/gp1/rmex';
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
            <h2>
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
            <h2>
                2. Relating angular and linear kinematics
            </h2>
            <h2>
                3. Energy in rotational motion
            </h2>
            <h2>
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
            <Helpful />
        </>
    );
}

export default Rm;