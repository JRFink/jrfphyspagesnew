import Link from 'next/link';
import Two3Vid from '@/public/videos/gp1/two3';
import style from '@/styles/general.module.css';
import { Modoverview2dm } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import Two3Ex from '@/pages/exercises/gp1/23dmex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Two3dm = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Motion in 2-3 Dimensions
            </h1>
            <br></br>
            <Modoverview2dm />
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