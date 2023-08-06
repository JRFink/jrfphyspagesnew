import Link from 'next/link';
import style from '@/styles/general.module.css';
import EqEx from '@/pages/exercises/gp1/eqex';
import Helpful from '@/pages/components/helpful';

const Eq = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Equilibrium
            </h1>
            <br></br>
            <h2 className={style.h2SectionColor}>
                1. Intro
            </h2>
            <h2 className={style.h2SectionColor}>
                2. Requirements for equilibrium
            </h2>
            <br></br>
            <EqEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Eq;