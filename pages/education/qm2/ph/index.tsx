import Link from 'next/link';
import style from '@/styles/general.module.css';
import PhEx from '@/pages/exercises/qm2/phex';
import Helpful from '@/pages/components/helpful';

const Ph = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Perturbation of hydrogen 
            </h1>
            <PhEx />
            <Helpful />
        </>
    );
}

export default Ph;