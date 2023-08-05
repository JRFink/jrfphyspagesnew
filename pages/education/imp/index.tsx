import Link from 'next/link';
import style from '@/styles/general.module.css';

const Imp = () => {
    return (
        <>
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Intro to Modern Physics
            </h1>
            <br></br>
            <br></br>
            <Link href="/education/imp/spc" className={style.generalLink}>Space, time, and relativity</Link><br></br>
            <br></br>
            <Link href="/education/imp/relmech" className={style.generalLink}>Relativistic mechanics</Link><br></br>
            <br></br>
            <Link href="/education/imp/quant" className={style.generalLink}>Intro to quantum mechanics</Link><br></br>
            <br></br>
            <Link href="/education/imp/his" className={style.generalLink}>Historical survey</Link><br></br>
            <br></br>
            <Link href="/education/imp/schrod" className={style.generalLink}>Schrodinger equation</Link><br></br>
            <br></br>
            <Link href="/education/imp/hyd" className={style.generalLink}>Hydrogen</Link><br></br>
            <br></br>
            <Link href="/education/imp/multnuc" className={style.generalLink}>Multi nucleon and electron atoms</Link><br></br>
            <br></br>
            <Link href="/education/imp/mod" className={style.generalLink}>Modern applications</Link><br></br>
        </>
    );
}

export default Imp;