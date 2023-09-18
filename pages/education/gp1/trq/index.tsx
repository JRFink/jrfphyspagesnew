import Link from 'next/link';
import style from '@/styles/general.module.css';
import LearnGoal from '@/pages/components/learngoal';
import TrqVid from '@/public/videos/gp1/trq';
import TrqEx from '@/pages/exercises/gp1/trqex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Trq = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Dynamics of Rotational Motion
            </h1>
            <br></br>
<LearnGoal /> 
<br />
            <TrqVid />
            <br></br>
            <br />
<p> 
     In a similar way how we went from linear motion to changes in linear motion, we go from rotational motion to changes in rotational motion. 
</p> 
            <br />
            <h2 className={style.h2SectionColor}>
                1. Variables
            </h2>
            <p>
                Often the values of the variables of rotational motion change.
            </p>
                <h3 className={style.h3num}>
                    1.1 
                </h3>
                <h3 className={style.h3text}>
                    Dynamic variables
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.1.1 Some of the dynamic variables are... 
                    </h4>
            <h2 className={style.h2SectionColor}>
                2. Rolling 
            </h2>
                <p>
                    When an object rolls, we need the variables of rotational motion in order to characterize its motion. 
                </p>
                <h3 className={style.h3num}>
                    2.1 
                </h3>
                <h3 className={style.h3text}>
                    Rolling
                </h3>
                    <h4>
                        &nbsp; &nbsp; 2.1.1 Rolling... 
                    </h4>
            <h2 className={style.h2SectionColor}>
                3. Torque
            </h2>
                <p>
                    Torque is the rotational equivalent of a force in Newton&#39;s second law. It causes change.
                </p>
                <h3 className={style.h3num}>
                    3.1 
                </h3>
                <h3 className={style.h3text}>
                    Torque
                </h3>
                    <h4>
                        &nbsp; &nbsp; 3.1.1 Torque... 
                    </h4>
            <h2 className={style.h2SectionColor}>
                4. Angular momentum
            </h2>
                <p>
                    Angular momentum...
                </p>
            <h3 className={style.h3num}>
                4.1
            </h3>
            <h3 className={style.h3text}>
                Spin angular momentum
            </h3>
                <h4>
                    &nbsp; &nbsp; 4.1.1 Spin angular momentum
                </h4>
            <h3 className={style.h3num}>
                4.2
            </h3>
            <h3 className={style.h3text}>
                Orbital angular momentum
            </h3>
                <h4>
                    &nbsp; &nbsp; 4.2.1 Spin angular momentum
                </h4>
            <br></br>
            <br></br>
            <TrqEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/eq" className={style.backtoLink}>Equilibrium &#38; elasticity &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Trq;