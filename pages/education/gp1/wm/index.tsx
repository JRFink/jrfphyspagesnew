import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewWm } from '@/pages/components/modoverview';
import WmEx from '@/pages/exercises/gp1/wmex';
import Helpful from '@/pages/components/helpful';

const Wave = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Wave Motion
            </h1>
            <br></br>
            <ModoverviewWm />
            <br></br>
            <h2 className={style.h2SectionColor} id="type">
                1. Types of wave motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="desc">
                2. Describing wave motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="en">
                3. Energy in waves
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="wave">
                4. Wave equation
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="sup">
                5. Superposition
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <WmEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Wave;