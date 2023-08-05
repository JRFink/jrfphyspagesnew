import Link from 'next/link';
import style from '@/styles/general.module.css';
import ModEx from '@/pages/exercises/imp/modex';
import Helpful from '@/pages/components/helpful';

const Mod = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Modern applications
            </h1>
            <ModEx />
            <Helpful />
        </>
    );
}

export default Mod;