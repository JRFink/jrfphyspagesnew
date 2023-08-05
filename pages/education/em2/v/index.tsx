import Link from 'next/link';
import style from '@/styles/general.module.css';
import VEx from '@/pages/exercises/em2/vex';
import Helpful from '@/pages/components/helpful';

const V = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Potentials & Fields
            </h1>
            <VEx />
            <Helpful />
        </>
    );
}

export default V;