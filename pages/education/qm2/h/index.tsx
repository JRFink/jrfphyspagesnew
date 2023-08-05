import Link from 'next/link';
import style from '@/styles/general.module.css';
import HEx from '@/pages/exercises/qm2/hex';
import Helpful from '@/pages/components/helpful';

const H = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Hydrogen atom 
            </h1>
            <HEx />
            <Helpful />
        </>
    );
}

export default H;