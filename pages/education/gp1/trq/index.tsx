import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewTrq } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import TrqVid from '@/public/videos/gp1/trq';
import TrqEx from '@/pages/exercises/gp1/trqex';
import Quizheading from '@/pages/components/quizHeading';
import Helpful from '@/pages/components/helpful';

const Trq = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Dynamics of Rotational Motion
            </h1>
            <br /> 
            <ModoverviewTrq />
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
            <br />
            <h2 className={style.h2SectionColor}> 
                    Domain of rotational dynamics  
            </h2>
            <p> 
            The domain of rotational dynamics is... 
            </p>
            <br /> 
            <br />  
  <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
  <br />
            <br />
            <h2 className={style.h2SectionColor} id="var">
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
            <h2 className={style.h2SectionColor} id="roll">
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
                    <h2 className={style.h2SectionColor} id="amoment">
                3. Angular momentum
            </h2>
                <p>
                    We define angular momentum as 
                </p>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}><b>L</b> &nbsp; = &nbsp; <b>r</b> &nbsp; x &nbsp; <b>p</b></div> 
                    <div className={style.equationNumber}>&#40;1&#41;</div>
                </div>
<p>
    The length gives the magnitude of the vector. We can also write the magnitude of the angular momentum as
                </p>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}> L &nbsp; = I &#969;</div> 
                </div>
            <br />
            <h3 className={style.h3num}>
                3.1
            </h3>
            <h3 className={style.h3text}>
                Orbital angular momentum
            </h3>
                <h4>
                    &nbsp; &nbsp; 3.1.1 Orbital angular momentum
                </h4>
            <h3 className={style.h3num}>
                3.2
            </h3>
            <h3 className={style.h3text}>
                Spin angular momentum
            </h3>
                <h4>
                    &nbsp; &nbsp; 3.2.1 Spin angular momentum
                </h4>
            <h2 className={style.h2SectionColor} id="torq">
                4. Torque
            </h2>
                <p>
                    Torque is the rotational equivalent of a force in Newton&#39;s second law. It causes angular acceleration.
                </p>
                <h3 className={style.h3num}>
                    4.1 
                </h3>
                <h3 className={style.h3text}>
                    Torque
                </h3>
                <p>
                    The torque about a single point is 
                </p>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}> <b>&#964;</b> &nbsp; = &nbsp; <b>r</b> &nbsp; x &nbsp; <b>F</b> &nbsp;</div> 
                    <div className={style.equationNumber}>&#40;2&#41;</div>
                </div>
                <br />
<p> 
We can also write the magnitude as 
</p>
                <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}> &#964; &nbsp; = I &#945;</div>  
                 </div> 
             <br />
       
            <br></br>
            <br></br>
            <TrqEx />
            <br></br>
            <br></br>
            {/* <OnedmQz /> */}
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