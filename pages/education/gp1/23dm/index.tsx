import Link from 'next/link';
import Two3Vid from '@/public/videos/gp1/two3';
import style from '@/styles/general.module.css';
import { Modoverview2dm } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import Two3Ex from '@/pages/exercises/gp1/23dmex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Two3dm = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Motion in 2-3 Dimensions
            </h1>
            <br></br>
            <Modoverview2dm />
    <br /> 
<LearnGoal />
            <p> 
                 After going through this section, you should be able to  
                 <ul> 
                     <li>Solve for the speed of a planet going around a atar.</li> 
                 </ul> 
             </p>
<h2> 
Introduction 
</h2>
<p>
From 1 dimension we move to 2 and 3 dimensions. Now, motion is allowed to be not only linear but also curvy. How do we deal with these situations?
</p> 

<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of 2 - 3 dimensions  
</h2>
<p> 
 The domain of two and three dimensional motion is motion which we can characterize by two or three independent variables, respectively.
 </p>
<br /> 
            <br /> 
 <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2> 
 <br />
<p> 
      Consider the problem of a rock tied to a rope that is swung around an axis, the block resting on frictionless ice.   
 </p>
<br />
            <h2 className={style.h2SectionColor} id="2dm">
                1. 2 dimensions 
            </h2>
            <br></br>
            <Two3Vid />
            <br></br>
            <h3 className={style.h3num}>
                1.1 
            </h3> 
            <h3 className={style.h3text}>
                Position and displacement
            </h3>
                <h4> 
                    &nbsp; &nbsp; 1.1.1 Position
                </h4> 
                <h4> 
                    &nbsp; &nbsp; 1.1.2 Displacement 
                </h4>   
            <h3 className={style.h3num}>
            1.2
            </h3> 
                        <h3 className={style.h3text}>
                            Velocity
                        </h3>
                <h4> 
                    &nbsp; &nbsp; 1.2.1 Velocity
                </h4>         
            <h3 className={style.h3num}>
            1.3
            </h3> 
                        <h3 className={style.h3text}>
                            Acceleration
                        </h3>
                <h4> 
                    &nbsp; &nbsp; 1.3.1 Position
                </h4>
            <h3 className={style.h3num}>
            1.4
            </h3> 
            <h3 className={style.h3text}>
                Projectile motion
            </h3>
                <h4> 
                    &nbsp; &nbsp; 1.4.1 Projectile motion
                </h4>
            <h3 className={style.h3num}>
                1.5
            </h3> 
            <h3 className={style.h3text}>
                Uniform circular motion
            </h3>
                <h4> 
                    &nbsp; &nbsp; 1.5.1 Uniform circular motion
                </h4>
        <h2 className={style.h2SectionColor} id="3dm">
            2. 3 dimensions 
        </h2>
            <p>
                We extend motion in 2 dimensions to 3 dimensions.
            </p>
            <h3 className={style.h3num}>
            2.1 
            </h3> 
            <h3 className={style.h3text}>
                Position and displacement
            </h3>
                <h4> 
                    &nbsp; &nbsp; 2.1.1 Position
                </h4>  
            <h4>
            &nbsp; &nbsp; 2.1.2 Displacement 
            </h4>      
            <h3 className={style.h3num}>
            2.2
            </h3> 
                        <h3 className={style.h3text}>
                            Velocity
                        </h3>
                <h4> 
                    &nbsp; &nbsp; 1.2.1 Velocity
                </h4> 
            <h3 className={style.h3num}>
            2.3 
            </h3> 
                        <h3 className={style.h3text}>
                            Acceleration
                        </h3>
                <h4> 
                    &nbsp; &nbsp; 2.3.1 Acceleration
                </h4> 
                        <h2 className={style.h2SectionColor} id="rel">
                            3. Relative motion
                        </h2>
                        <p>
                            Two things can move in relation to one another.
                        </p>
                        <h3 className={style.h3num}>
                            3.1 
                        </h3> 
                        <h3 className={style.h3text}>
                            1 d
                        </h3>
                <h4> 
                    &nbsp; &nbsp; 3.1.1 1 d
                </h4> 
            <h3 className={style.h3num}>
            3.2 
            </h3> 
                        <h3 className={style.h3text}>
                            2 d
                        </h3>
                <h4> 
                    &nbsp; &nbsp; 3.2.1 2 d
                </h4> 
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <Two3Ex />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/diff" className={style.backtoLink}>Differential equations crash course &#10140;</Link>  
             <br />  
             <br />                 
            <Helpful />
        </>
    );
}

export default Two3dm;