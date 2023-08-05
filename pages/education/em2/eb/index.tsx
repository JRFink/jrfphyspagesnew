import Link from 'next/link';
import style from '@/styles/general.module.css';
import EbEx from '@/pages/exercises/em2/ebex';
import Helpful from '@/pages/components/helpful';

const Eb = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electromagnetic Waves
            </h1>
            <EbEx />
            <Helpful />
        </>
    );
}

export default Eb;