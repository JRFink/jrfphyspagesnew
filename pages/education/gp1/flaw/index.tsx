import Link from 'next/link';
import style from '@/styles/general.module.css';
import { Modoverview1st } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import FlawEx from '@/pages/exercises/gp1/flawex';
import Quizheading from '@/pages/components/quizHeading';
import Helpful from '@/pages/components/helpful';

const Flaw = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                First Law of Thermodynamics
            </h1>
            

            {/* thermodynamic systems 
            work done during volume changes 
            paths between thermodynamic states 
            internal energy and the first law of thermodynamics 
            kinds of thermodynamic processes 
            internal energy of an ideal gas 
            heat capacities of an ideal gas 
            adiabatic processes for an ideal gas  */}
            <Modoverview1st />
            <br /> 
            <LearnGoal />
            <h2> 
                Introduction 
            </h2>
            <p> 
                Going from gases we proceed to the first law of thermodynamics. 
                The first law of thermodynamics concerns itself with energy and the conservation of energy. 
            </p> 
            <p>
                In this section we will also cover pressure and volume. 
            </p> 
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                Domain of the first law
            </h2>
            <p> 
                The domain of thr first law is... 
            </p>
            <br /> 
<p> 
      Consider a thermometer.   
 </p>
            <br />  
  <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
  <br />
            <br />
            <Summary /> 
            <br />
            <br></br>
            <br></br>
            <FlawEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <br /> 
            <Link href="/education/gp1/slaw" className={style.backtoLink}>Second law &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Flaw;