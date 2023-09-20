import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewEq } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import EqEx from '@/pages/exercises/gp1/eqex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
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
{ /* 
<h2> 
Introduction 
</h2>
*/ } 
<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of equilibrium and elasticity  
</h2>
<p> 
 The domain of newton&#39;s laws is... 
 </p>
<br /> 
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
<Summary /> 
<br /> 
            <br></br>
            <br></br>
            <EqEx />
            <br></br>
            <br></br>
            <OnedmQz />
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