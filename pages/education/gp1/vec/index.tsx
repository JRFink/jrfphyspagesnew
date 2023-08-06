import Link from 'next/link';
import style from '@/styles/general.module.css';
import VecEx from '@/pages/exercises/gp1/vecex';
import Helpful from '@/pages/components/helpful';

const Vec = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Vector review
            </h1>
            <br></br>
            <VecEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Vec;