import Link from 'next/link';
import style from '@/styles/general.module.css';
import BstatEx from '@/pages/exercises/em1/bstatex';
import Helpful from '@/pages/components/helpful';

const Magstat = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Magnetostatics
            </h1>
            <BstatEx />
            <Helpful />
        </>
    );
}

export default Magstat;