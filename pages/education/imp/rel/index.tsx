import Link from 'next/link';
import style from '@/styles/general.module.css';
import RelEx from '@/pages/exercises/imp/relex';
import Helpful from '@/pages/components/helpful';

const Rel = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Intro to Relativity
            </h1>

            <RelEx />
            <Helpful />
        </>
    );
}

export default Rel;