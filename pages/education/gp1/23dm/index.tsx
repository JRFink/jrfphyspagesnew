import Link from 'next/link';
import Two3Vid from '@/public/videos/gp1/two3';
import style from '@/styles/general.module.css';
import Two3Ex from '@/pages/exercises/gp1/23dmex';
import Helpful from '@/pages/components/helpful';

const Two3dm = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Motion in 2-3 Dimensions
            </h1>
            <h2 className={style.h2SectionColor}>
                1. 2 dimensions 
            </h2>
            <br></br>
            <Two3Vid />
            <br></br>
            <h3>
                1.1 Position and displacement
            </h3>
            <h3>
                1.2 Velocity
            </h3>
            <h3>
                1.3 Acceleration 
            </h3>
            <h3>
                1.4 Projectile motion
            </h3>
            <h3>
                1.5 Uniform circular motion
            </h3>
            <h2 className={style.h2SectionColor}>
                2. 3 dimensions 
            </h2>
            <h3>
                2.1 Position and displacement
            </h3>
            <h3>
                2.2 Velocity 
            </h3>
            <h3>
                2.3 Acceleration
            </h3>
            <h2 className={style.h2SectionColor}>
                3. Relative motion
            </h2>
            <h3>
                3.1 1 d
            </h3>
            <h3>
                3.2 2 d
            </h3>
            <h2 className={style.summaryHeading}>
                Summary
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <Two3Ex />
            <br></br>
            <Helpful />
        </>
    );
}

export default Two3dm;