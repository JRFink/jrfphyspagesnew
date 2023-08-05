import Link from 'next/link';
import style from '@/styles/general.module.css';
import QEx from '@/pages/exercises/therm/qex';
import Helpful from '@/pages/components/helpful';

const Q = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Quantum Statistics 
            </h1>
            <QEx />
            <Helpful />
        </>
    );
}

export default Q;