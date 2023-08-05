import Link from 'next/link';
import style from '@/styles/general.module.css';
import SpcEx from '@/pages/exercises/imp/spcex';
import Helpful from '@/pages/components/helpful';

const Spc = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Space, time, and relativity
            </h1>
            <SpcEx />
            <Helpful />
        </>
    );
}

export default Spc;