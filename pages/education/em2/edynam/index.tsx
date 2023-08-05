import Link from 'next/link';
import style from '@/styles/general.module.css';
import EdynamEx from '@/pages/exercises/em2/edynamex';
import Helpful from '@/pages/components/helpful';

const Edynam = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electrodynamics
            </h1>
            <EdynamEx />
            <Helpful />
        </>
    );
}

export default Edynam;