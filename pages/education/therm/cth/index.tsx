import Link from 'next/link';
import style from '@/styles/general.module.css';
import CthEx from '@/pages/exercises/therm/cthex';
import Helpful from '@/pages/components/helpful';

const Cth = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Chemical Thermodynamics 
            </h1>
            <CthEx />
            <Helpful />
        </>
    );
}

export default Cth;