import Link from 'next/link';
import style from '@/styles/general.module.css';
import HydEx from '@/pages/exercises/imp/hydex';
import Helpful from '@/pages/components/helpful';

const Hyd = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Hydrogen
            </h1>
            <HydEx />
            <Helpful />
        </>
    );
}

export default Hyd;