import Link from 'next/link';
import style from '@/styles/general.module.css';
import SchrodEx from '@/pages/exercises/imp/schrodex';
import Helpful from '@/pages/components/helpful';

const Schrod = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Schrodinger equation
            </h1>
            <SchrodEx />
            <Helpful />
        </>
    );
}

export default Schrod;