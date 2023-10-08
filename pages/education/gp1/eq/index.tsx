import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewEq } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import EqEx from '@/pages/exercises/gp1/eqex';
import Quizheading from '@/pages/components/quizHeading';
import Helpful from '@/pages/components/helpful';

const Eq = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Equilibrium and Elasticity
            </h1>
            <br></br>
            <ModoverviewEq />
            <br></br>
<LearnGoal />  
<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of equilibrium and elasticity  
</h2>
<p> 
 The domain of equilibrium and elasticity is... 
 </p>
<br /> 
            <br />  
  <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
  <br />
<p> 
      Consider a bridge spanning a river. The bridge does not collapse.   
 </p>
<br />
            <h2 className={style.h2SectionColor} id="int">
                1. Intro
            </h2>
            <br></br>
<p> 
     Moving from dynamics of rotational motion, we proceed to equilibrium and elasticity. In order for an object to be in equilibrium, certain things need to balance or be 0. We studied some of these things in the previous section. 
</p> 
            <br></br>
            <h2 className={style.h2SectionColor} id="req">
                2. Requirements for equilibrium
            </h2>
            <br></br>
<p> 
We first begin with the requirements for equilibrium. 
</p>
<h3 className={style.h3num}> 
2.1 
</h3> 
<h3 className={style.h3text}> 
Forces
</h3>
<h4>
&nbsp; &nbsp; 2.1.1 Force balancing 
</h4> 
<h3 className={style.h3num}>
2.2 
</h3> 
<h3 className={style.h3text}> 
Torque 
</h3> 
<h4> 
&nbsp; &nbsp; 2.2.1 Torque balancing 
</h4> 
<br />
 <h2 className={style.h2SectionColor} id="elas">
                3. Elasticity
            </h2>
<h3 className={style.h3num}>
3.1
</h3> 
<h3 className={style.h3text}>
Young&#39;s modulus 
</h3>
    <p> 
         Young&#39;s modulus is given by  
     </p> 
    <br /> 
    <div className={style.equationBox}> 
         <div className={style.equation}>E = &#963; / &#949; = F L<span><sub>0</sub></span> / A &#916; L</div>   
         <div className={style.equationNumber}>&#40;1&#41;</div> 
     </div> 
    <br />
<Summary /> 
<br /> 
            <br></br>
            <br></br>
            <EqEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <br /> 
            <Link href="/education/gp1/taylor" className={style.backtoLink}>Taylor expansion &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Eq;