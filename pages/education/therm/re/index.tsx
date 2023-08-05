import Link from 'next/link';
import style from '@/styles/general.module.css';
import ReEx from '@/pages/exercises/therm/reex';
import Helpful from '@/pages/components/helpful';

const Re = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Refrigerators and Engines
            </h1>
            <ReEx />
            <Helpful />
        </>
    );
}

export default Re;