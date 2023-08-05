import Link from 'next/link';
import style from '@/styles/general.module.css';
import RadEx from '@/pages/exercises/em2/radex';
import Helpful from '@/pages/components/helpful';

const Rad = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Radiation
            </h1>
            <RadEx />
            <Helpful />
        </>
    );
}

export default Rad;