import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewGas } from '@/pages/components/modoverview';
import KinEx from '@/pages/exercises/gp1/kinex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Kin = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Gases
            </h1>
            <ModoverviewGas />
            <h2 className={style.h2SectionColor} id="ideal">
                Ideal
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="mol">
                Molecular theory of gases
            </h2>           
            <br></br>
            <br></br>            
            <h2 className={style.h2SectionColor} id="ad"> 
                Adiabatic processes
            </h2>

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
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/flaw" className={style.backtoLink}>First law of thermodynamics &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default Kin;
