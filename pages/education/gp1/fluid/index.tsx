import Link from 'next/link';
import style from '@/styles/general.module.css';
import FluidEx from '@/pages/exercises/gp1/fluidex';
import Helpful from '@/pages/components/helpful';

const Fluid = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Fluids
            </h1>

            <br></br>
            <br></br>
            <FluidEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Fluid;