import Link from 'next/link';
import style from '@/styles/general.module.css';
import KinEx from '@/pages/exercises/gp1/kinex';
import Helpful from '@/pages/components/helpful';

const Kin = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Gases
            </h1>

            {/* avogadros number 
            ideal gases 
            pressure, temp, rms speed 
            translational kinetic energy 
            mean free path 
            distribution of molecular speeds 
            molecular specific heats of an ideal gas 
            degrees of freedom and molar specific heats 
            the adiabatic expansion of an ideal gas  */}

            <br></br>
            <br></br>
            <KinEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Kin;
