import Link from 'next/link';
import style from '@/styles/general.module.css';
import HisEx from '@/pages/exercises/imp/hisex';
import Helpful from '@/pages/components/helpful';

const Hist = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Historical survey
            </h1>
            <HisEx />
            <Helpful />
        </>
    );
}

export default Hist;