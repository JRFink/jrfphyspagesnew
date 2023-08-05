import Link from 'next/link';
import style from '@/styles/general.module.css';
import SecondEx from '@/pages/exercises/therm/2ndex';
import Helpful from '@/pages/components/helpful';

const Second = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                The Second Law 
            </h1>
            <SecondEx />
            <Helpful />
        </>
    );
}

export default Second;