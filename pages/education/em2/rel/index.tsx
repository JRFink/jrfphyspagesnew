import Link from 'next/link';
import style from '@/styles/general.module.css';
import RelEx from '@/pages/exercises/em2/relex';
import Helpful from '@/pages/components/helpful';

const Rel = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electrodynamics & Relativity
            </h1>
            <RelEx />
            <Helpful />
        </>
    );
}

export default Rel;