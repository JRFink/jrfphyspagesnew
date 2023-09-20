import Link from 'next/link';
import style from '@/styles/general.module.css';
import PmvVid from '@/public/videos/gp1/pmv';
import { ModoverviewPmv } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import PmvEx from '@/pages/exercises/gp1/pmvex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Pmv = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Momentum, Impulse, & Collisions
            </h1>
            <ModoverviewPmv />
            <br /> 
<LearnGoal />
<h2> 
Introduction 
</h2>
            <br></br>
<p> 
     Proceeding from energy theory we move to the theory of momentum, impulse, and collisions. We discussed momentum when we learned about Newton&#39;s laws. 
</p> 
<br />
<PmvVid /> 

<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of momentum, impulse, &#38; collisions 
</h2>
<p> 
 The domain of momentum, impulse, and collisions is... 
 </p>
<br /> 
<br />
            <h2 className={style.h2SectionColor} id="cent">
                1. Center of mass
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="moment">
                2. Momentum
            </h2>
            <p>
                Momentum...
            </p>
            <h3 className={style.h3num}>
                2.1 
            </h3>
            <h3 className={style.h3text}>
                Mechanical momentum
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.1.1 Mechanical momentum
                </h4>
            <h3 className={style.h3num}>
                2.2 
            </h3>
            <h3 className={style.h3text}>
                Momentum in 1, 2, and 3 dimensions
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.2.1 Momentum in 1 dimension
                </h4>
                <h4>
                    &nbsp; &nbsp; 2.2.2 Momentum in 2 dimensions
                </h4>
                <h4>
                    &nbsp; &nbsp; 2.2.3 Momentum in 3 dimensions
                </h4>
            <h2 className={style.h2SectionColor} id="impulse">
                3. Impulse
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="coll">
                4. Collisions
            </h2>
            <p>
                Collisions...
            </p>
            <h3 className={style.h3num}>
                4.1 
            </h3>
            <h3 className={style.h3text}>
                Elastic collisions
            </h3>
                <h4>
                    &nbsp; &nbsp; 4.1.1 Elastic collisions
                </h4>
            <h3 className={style.h3num}>
                4.2 
            </h3>
            <h3 className={style.h3text}>
                Inelastic collisions
            </h3>
                <h4>
                    &nbsp; &nbsp; 4.2.1 Inelastic collisions
                </h4>
            <h2 className={style.h2SectionColor} id="var">
                5. Systems with varying mass
            </h2>
<Summary />
            <br></br>
            <br></br>
            <br></br>
            <PmvEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/rm" className={style.backtoLink}>Rotational motion &#10140;</Link>  
            <br />  
            <br />
            <Helpful />
        </>
    );
}

export default Pmv;