import Link from 'next/link';
import style from '@/styles/general.module.css';
import MultnucEx from '@/pages/exercises/imp/multnucex';
import Helpful from '@/pages/components/helpful';

const Multnuc = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Multi nucleon and electron atoms
            </h1>
            <MultnucEx />
            <Helpful />
        </>
    );
}

export default Multnuc;