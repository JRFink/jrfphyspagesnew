import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <br />
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Homework
            </h1>
            <Link href="/education/em1/math/hw/1" className={style.lightGreenLink}>Math background</Link>
            <br />
            <Link href="/education/em1/elec/hw/1" className={style.lightGreenLink}>Electrostatics</Link>
            <br />
            <Link href="/education/em1/spc/hw/1" className={style.lightGreenLink}>Special techniques</Link>
            <br />
            <Link href="/education/em1/fields/hw/1" className={style.lightGreenLink}>Electric fields in matter</Link>
            <br />
            <Link href="/education/em1/bstat/hw/1" className={style.lightGreenLink}>Magnetostatics</Link>
            <br />
            <Link href="/education/em1/bmat/hw/1" className={style.lightGreenLink}>Magnetic fields in matter</Link>
            <br />
        </>
    );
}

export default Hw; 