import Link from 'next/link';
import style from '@/styles/general.module.css';
import PtEx from '@/pages/exercises/qm2/ptex';
import Helpful from '@/pages/components/helpful';

const Pt = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Perturbation theory
            </h1>
            <PtEx />
            <Helpful />
        </>
    );
}

export default Pt;