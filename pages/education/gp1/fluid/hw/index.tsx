import Link from 'next/link';
import style from '@/styles/general.module.css';

const FluidHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Fluid hw
            </h1>
        </>
    );
}

export default FluidHw;