import Link from 'next/link';
import style from '@/styles/general.module.css';
import ThermpropEx from '@/pages/exercises/therm/thermpropex';
import Helpful from '@/pages/components/helpful';

const Thermprop = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Thermal Properties of Matter 
            </h1>
            <ThermpropEx />
            <Helpful />
        </>
    );
}

export default Thermprop;