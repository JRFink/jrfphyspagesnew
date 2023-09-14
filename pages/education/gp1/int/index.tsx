import Link from 'next/link';
import style from '@/styles/general.module.css';
import ModoverviewInt from '@/pages/components/modoverview';
import FluidEx from '@/pages/exercises/gp1/fluidex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Fluid = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Introduction
            </h1>
            {/* <ModoverviewInt /> */}
            {/* <h2 className={style.h2SectionColor} id="">
            </h2> */}
            <p>
                The whole goal of physics is to describe how something moves on a fundamental level. <em>How do we describe a car going on a track? 
                How do we describe a satellite going around the earth? How do we describe the motion of the electron around the proton?</em>
            </p>
            <br></br>
            <br></br>
            <FluidEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default Fluid;