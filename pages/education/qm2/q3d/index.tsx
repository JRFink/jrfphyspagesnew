import Link from 'next/link';
import style from '@/styles/general.module.css';
import Q3dEx from '@/pages/exercises/qm2/q3dex';
import Helpful from '@/pages/components/helpful';

const Q3d = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Quantum in 3 dimensions 
            </h1>
            <Q3dEx />
            <Helpful />
        </>
    );
}

export default Q3d;