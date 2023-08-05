import Link from 'next/link';
import style from '@/styles/general.module.css';
import EnergyEx from '@/pages/exercises/therm/energyex';
import Helpful from '@/pages/components/helpful';

const Energy = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Energy in Thermal Physics 
            </h1>
            <EnergyEx />
            <Helpful />
        </>
    );
}

export default Energy;