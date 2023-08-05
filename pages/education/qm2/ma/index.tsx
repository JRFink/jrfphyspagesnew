import Link from 'next/link';
import style from '@/styles/general.module.css';
import MaEx from '@/pages/exercises/qm2/maex';
import Helpful from '@/pages/components/helpful';

const Ma = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Modern applications 
            </h1>
            <MaEx />
            <Helpful />
        </>
    );
}

export default Ma;