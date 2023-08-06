import Link from 'next/link';
import style from '@/styles/general.module.css';
import FlawEx from '@/pages/exercises/gp1/flawex';
import Helpful from '@/pages/components/helpful';

const ApplNl = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Applying Newton&#39;s laws
            </h1>
            <h2 className={style.h2SectionColor}>
                1. Using the first law
            </h2>
                <h3>
                    1.1 Equilibrium
                </h3>
            <h2 className={style.h2SectionColor}>
                2. Using the second
            </h2>
                <h3>
                    2.1 Friction
                </h3>
                    <h4>
                        2.1.1 Static
                    </h4>
                    <h4>
                        2.1.2 Kinetic
                    </h4>
                    <h4>
                        2.1.3 Rolling
                    </h4>
                <h3>
                    2.2 Tension
                </h3>
                <h3>
                    2.3 Free-fall with approximate a
                </h3>
                <h3>
                    2.4 Drag force
                </h3>
            <h2 className={style.h2SectionColor}>
                3. Using the third
            </h2>
                <h3>
                    3.1 Reaction forces
                </h3>
            <h2 className={style.h2SectionColor}>
                4. Dynamics of circular motion
            </h2>
                <h3>
                    4.1 Going around a curve
                </h3>
            <h2 className={style.summaryHeading}>
                Summary
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <FlawEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default ApplNl;