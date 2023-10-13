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
            <Link href="/education/em1/math" className={style.lightGreenLink}>Math background</Link>
            <br />
            <Link href="/education/em1/elec" className={style.lightGreenLink}>Electrostatics</Link>
            <br />
            <Link href="/education/em1/spc" className={style.lightGreenLink}>Special techniques</Link>
            <br />
            <Link href="/education/em1/fields" className={style.lightGreenLink}>Electric fields in matter</Link>
            <br />
            <Link href="/education/em1/bstat" className={style.lightGreenLink}>Magnetostatics</Link>
            <br />
            <Link href="/education/em1/bmat" className={style.lightGreenLink}>Magnetic fields in matter</Link>
            <br />
        </>
    );
}

export default Hw; 