import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewG } from '@/pages/components/modoverview';
import GEx from '@/pages/exercises/gp1/gex';
import Helpful from '@/pages/components/helpful';

const Gravity = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Gravity
            </h1>
            <br></br>
            <ModoverviewG />
            <br></br>
            <h2 className={style.h2SectionColor} id="field">
                1. Gravitational field and force
            </h2>
            <h3>
                1.1 Gravitational field
            </h3>
            <h3>
                1.2 Gravitational force
            </h3>
            <h2 className={style.h2SectionColor} id="potent">
                2. Gravitational potential
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="near">
                3. Gravitation near earth&apos;s surface
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="mot">
                4. Motion of satellites
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="kep">
                5. Kepler&apos;s laws
            </h2>
            <h3>
                5.1 Kepler&apos;s first law
            </h3>
            <h3>
                5.2 Kepler&apos;s second law
            </h3>
            <h3>
                5.3 Kepler&apos;s third law
            </h3>
            <h2 className={style.h2SectionColor} id="grav">
                6. Einstein and gravity
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <GEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Gravity;