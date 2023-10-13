import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <br /> 
            <Link href="/education/cm1" className={style.backtoLink}>Class mech 1</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Homework
            </h1>
            <Link href="/education/cm1/over/hw/1" className={style.lightGreenLink}>Overview of classical mechanics</Link>
            <br />
            <Link href="/education/cm1/nlaw/hw/1" className={style.lightGreenLink}>Newton&#39;s laws</Link>
            <br />
            <Link href="/education/cm1/proj/hw/1" className={style.lightGreenLink}>Projectiles</Link>
            <br />
            <Link href="/education/cm1/angmom/hw/1" className={style.lightGreenLink}>Momentum and angular momentum</Link>
            <br />
            <Link href="/education/cm1/energ/hw/1" className={style.lightGreenLink}>Energy</Link>
            <br />
            <Link href="/education/cm1/osc/hw/1" className={style.lightGreenLink}>Oscillations</Link>
            <br />
          


        </>
    );
}

export default Hw;