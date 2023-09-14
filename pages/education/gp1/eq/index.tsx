import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewEq } from '@/pages/components/modoverview';
import EqEx from '@/pages/exercises/gp1/eqex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Eq = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Equilibrium and Elasticity
            </h1>
            <br></br>
            <ModoverviewEq />
            <br></br>
            <h2 className={style.h2SectionColor} id="int">
                1. Intro
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="req">
                2. Requirements for equilibrium
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <EqEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/taylor" className={style.backtoLink}>Taylor expansion &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Eq;