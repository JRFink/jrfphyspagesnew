import Link from 'next/link';
import style from '@/styles/general.module.css';
import GhtsEx from '@/pages/exercises/therm/ghtsex';
import Helpful from '@/pages/components/helpful';

const Ghts = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Thermodynamic Relations 
            </h1>
            <GhtsEx />
            <Helpful />
        </>
    );
}

export default Ghts;