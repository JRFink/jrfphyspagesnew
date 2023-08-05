import Link from 'next/link';
import style from '@/styles/general.module.css';
import RbodEx from '@/pages/exercises/cm2/rbodex';
import Helpful from '@/pages/components/helpful';

const Rbod = () => {
    return (
        <>
            <Link href="/education/cm2" className={style.backtoLink}>Class Mech 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Rigid Body Motion
            </h1>
            <RbodEx />
            <Helpful />
        </>
    );
}

export default Rbod;