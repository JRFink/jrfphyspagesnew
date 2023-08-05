import Link from 'next/link';
import style from '@/styles/general.module.css';
import TdpEx from '@/pages/exercises/qm2/tdpex';
import Helpful from '@/pages/components/helpful';

const Tdp = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Time dependent perturbation theory
            </h1>
            <TdpEx />
            <Helpful />
        </>
    );
}

export default Tdp;