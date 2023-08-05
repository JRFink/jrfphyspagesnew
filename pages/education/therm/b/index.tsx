import Link from 'next/link';
import style from '@/styles/general.module.css';
import BEx from '@/pages/exercises/therm/bex';
import Helpful from '@/pages/components/helpful';

const B = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Boltzmann Statistics
            </h1>
            <BEx />
            <Helpful />
        </>
    );
}

export default B;