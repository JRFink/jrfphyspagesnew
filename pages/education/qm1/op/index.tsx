import Link from 'next/link';
import style from '@/styles/general.module.css';
import OpEx from '@/pages/exercises/qm1/opex';
import Helpful from '@/pages/components/helpful';

const Op = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Math background
            </h1>
            <h2>
                1. Operators
            </h2>
            <h2>
                2. Commutation relations
            </h2>
            <OpEx />
            <Helpful />
        </>
    );
}

export default Op;