import Link from 'next/link';
import style from '@/styles/general.module.css';
import PmvVid from '@/public/videos/gp1/pmv';
import { ModoverviewPmv } from '@/pages/components/modoverview';
import PmvEx from '@/pages/exercises/gp1/pmvex';
import OnedmQz from '@/pages/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Pmv = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Momentum, Impulse, & Collisions
            </h1>
            <ModoverviewPmv />
            <br></br>
            <PmvVid />
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="cent">
                1. Center of mass
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="moment">
                2. Momentum
            </h2>
            <h3>
                2.1 Mechanical momentum
            </h3>
            <h3>
                2.2 Momentum in 1, 2, and 3 dimensions
            </h3>
            <h2 className={style.h2SectionColor} id="impulse">
                3. Impulse
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="coll">
                4. Collisions
            </h2>
            <h3>
                4.1 Elastic collisions
            </h3>
            <h3>
                4.2 Inelastic collisions
            </h3>
            <h2 className={style.h2SectionColor} id="var">
                5. Systems with varying mass
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <PmvEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default Pmv;