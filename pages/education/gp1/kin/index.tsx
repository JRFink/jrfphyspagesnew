import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewGas } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import KinEx from '@/pages/exercises/gp1/kinex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Kin = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Gases
            </h1>
            <ModoverviewGas />
            <br />
            <LearnGoal />
            <h2> 
                Introduction 
            </h2>
            <p> 
                Moving from temperature and heat we move to gases. 
                Now, we sort of already covered this when we talked about fluids. 
                Gases is a type of fluid. We apply some of the same methods we used there here. 
            </p>
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                Domain of gases 
            </h2>
            <p> 
                The domain of gases is... 
            </p>
            <br /> 
            <br /> 
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

            <Summary /> 
            <br /> 
            <br /> 
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
