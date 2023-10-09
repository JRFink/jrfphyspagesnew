import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewGas } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import KinEx from '@/pages/exercises/gp1/kinex';
import Quizheading from '@/pages/components/quizHeading';
import Gasquiz from '@/pages/education/gp1/gas/quiz';
import Helpful from '@/pages/components/helpful';

const Gas = () => {
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
            <h2 className={style.h2SectionColor}> 
                Solving a simple physics problem
            </h2>  
            <br />
            <br /> 
            <h2 className={style.h2SectionColor} id="ideal">
                1. Ideal
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="mol">
                2. Molecular theory of gases
            </h2>           
            <br></br>
            <br></br>            
            <h2 className={style.h2SectionColor} id="ad"> 
                3. Adiabatic processes
            </h2>
            <br />
            <br />
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
            <Quizheading />
            <br />
            <br /> 
            <br />
            <Link href="/education/gp1/flaw" className={style.backtoLink}>First law of thermodynamics &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default Gas;
