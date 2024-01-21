import Link from 'next/link';
import style from '@/styles/general.module.css';
import FnetEx from '@/pages/exercises/cm2/fnetex';
import Helpful from '@/pages/components/helpful';

const Fnet = () => {
    return (
        <>
            <Link href="/education/cm2" className={style.backtoLink}>Class Mech 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Central Force Problem
            </h1>
            <p>
                A key problem in classical mechanics 2 is the central force problem.
            </p>
            <FnetEx />
            <Helpful />
        </>
    );
}

export default Fnet;