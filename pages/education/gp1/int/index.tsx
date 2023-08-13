import Link from 'next/link';
import style from '@/styles/general.module.css';
import ModoverviewInt from '@/pages/components/modoverview';
import FluidEx from '@/pages/exercises/gp1/fluidex';
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
                Physics is the study of motion, matter, energy, and time. It studies things on a more fundamental level. 
            </p>
            <br></br>
            <br></br>
            <FluidEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Fluid;