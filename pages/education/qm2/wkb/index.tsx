import Link from 'next/link';
import style from '@/styles/general.module.css';
import WkbEx from '@/pages/exercises/qm2/wkbex';
import Helpful from '@/pages/components/helpful';

const Wkb = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                WKB approximation 
            </h1>
            <WkbEx />
            <Helpful />
        </>
    );
}

export default Wkb;