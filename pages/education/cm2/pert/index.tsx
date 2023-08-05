import Link from 'next/link';
import style from '@/styles/general.module.css';
import PertEx from '@/pages/exercises/cm2/pertex';
import Helpful from '@/pages/components/helpful';

const Pert = () => {
    return (
        <>
            <Link href="/education/cm2" className={style.backtoLink}>Class Mech 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Perturbation Theory
            </h1>
            <PertEx />
            <Helpful />
        </>
    );
}

export default Pert;