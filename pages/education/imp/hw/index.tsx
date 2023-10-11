import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Homework
            </h1>
            <Link href="/education/imp/rel/hw/1" className={style.lightGreenLink}>Space, time, and relativity</Link>
            <br />
            <br />
            <Link href="/education/imp/relmech/hw/1" className={style.lightGreenLink}>Relativistic mechanics</Link>
            <br />
            <br />
            <Link href="/education/imp/quant/hw/1" className={style.lightGreenLink}>Intro to quantum mechanics</Link>
            <br />
            <br />
            <Link href="/education/imp/his/hw/1" className={style.lightGreenLink}>Historical survey</Link>
            <br />
            <br />
            <Link href="/education/imp/schrod/hw/1" className={style.lightGreenLink}>Schrodinger equation</Link>
            <br />
            <br />
            <Link href="/education/imp/hyd/hw/1" className={style.lightGreenLink}>Hydrogen</Link>
            <br />
            <br />
            <Link href="/education/imp/multnuc/hw/1" className={style.lightGreenLink}>Multi-nucleon and electron atoms</Link>
            <br />
            <br />
            <Link href="/education/imp/mod/hw/1" className={style.lightGreenLink}>Modern applications</Link>
            <br />
            <br />
            <Link href="/education/imp/ac/hw/1" className={style.lightGreenLink}>AC circuits</Link>
            <br />
            <br />
            <Link href="/education/imp/eb/hw/1" className={style.lightGreenLink}>Electromagnetic waves</Link>
            <br />
            <br />
            <Link href="/education/imp/max/hw/1" className={style.lightGreenLink}>Maxwell&#39;s equations</Link>
            <br />
            <br />
        </>
    );
}

export default Hw;