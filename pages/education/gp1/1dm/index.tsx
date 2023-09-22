import Link from 'next/link';
import style from '@/styles/general.module.css';
import AccelVid from '@/public/videos/gp1/accelvid';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import { Modoverview1dm } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import OnedmEx from '@/pages/exercises/gp1/1dmex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';



const Onedm = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Motion in 1 Dimension
            </h1>
            <Modoverview1dm />
            <br />
            <LearnGoal />
            <h2>
            Introduction 
            </h2> 
            <p> 
            We begin our formal study of physics with 1 dimensional motion. This is the simplest motion one can study.
            </p>
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                    Domain of 1 dimension  
            </h2>
            <p>
            The domain of one dimensional motion is motion which we can characterize by 1 independent variable. 
            </p>
            <br /> 
            <br />
            <h2 className={style.h2SectionColor} id="pos">
                1. Position and displacement
            </h2>
            <p className={style.centerText}> 
                Buy the position and velocity video on our <Link href="/members">members</Link> page. 
            </p>

                <h3 className={style.h3num}> 
                     1.1 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Definitions
                 </h3>  
                 <h4>
                     &nbsp; &nbsp; 1.1.1 Definitions  
                 </h4>        
                <h3 className={style.h3num}> 
                     1.2 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Examples
                 </h3>  
                 <h4>
                     &nbsp; &nbsp; 1.2.1 Examples  
                 </h4>
            <h2 className={style.h2SectionColor} id="vel">
                2. Velocity
            </h2>
            <p> 
                 Velocity...
            </p> 
                <h3 className={style.h3num}> 
                     2.1 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Average and instantaneous
                 </h3>  
                 <h4>
                     &nbsp; &nbsp; 2.1.1 Average  
                 </h4>
                <h4>
                &nbsp; &nbsp; 2.1.2 Instantaneous
                </h4>
                            <h2 className={style.h2SectionColor} id="speed">
                                3. Speed
                            </h2>
                <p> 
                Speed... 
                </p> 
                <h3 className={style.h3num}> 
                     3.1 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Average and instantaneous
                 </h3>  
                 <h4>
                     &nbsp; &nbsp; 3.1.1 Average  
                 </h4>
                <h4> 
                    &nbsp; &nbsp; 3.1.2 Instantaneous
                    </h4>
                                <h2 className={style.h2SectionColor} id="accel">
                                    4. Acceleration
                                </h2>
                                <br></br>
                                <AccelVid />
                                <br></br>
                    <h3 className={style.h3num}>
                    4.1
                    </h3>
                    <h3 className={style.h3text}>
                        Average and instantaneous
                    </h3>
                        <h4> 
                            &nbsp; &nbsp; 4.1.1 Average 
                        </h4> 
                        <h4> 
                            &nbsp; &nbsp; 4.1.2 Instantaneous 
                        </h4>           
            <h3 className={style.h3num}>
            4.2
            </h3>
            <h3 className={style.h3text}>
                Motion with constant a
            </h3>
            <br></br>
            <DeriveKinVid />
            <br></br>
            <br />
    <p>
        The four governing equations of motion with constant <b>a</b> are 
    </p>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>x = x_0 + v t</div>
        
        <div className={style.equationNumber}>&#40;1&#41;</div>
    </div>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>v = v_0 + a t</div>
        <div className={style.equationNumber}>&#40;2&#41;</div>
   </div>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>x = x_0 + v_0 t + 1/2 a t^2</div>
        <div className={style.equationNumber}>&#40;3&#41;</div>
   </div>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>v = v_0 ^ 2 + 2 a &#916; r</div>
        <div className={style.equationNumber}>&#40;4&#41;</div>
   </div>
    <br />
    <h3 className={style.h3num}>
        4.3
    </h3>
            <h3 className={style.h3text}>
                Motion with non-constant a
            </h3>
            <br />
            <h2 className={style.h2SectionColor} id="calc">
                5. Calculus examples
            </h2>
            <p>
                Examples...
            </p>
            <h3 className={style.h3num}>
                5.1 
            </h3>
            <h3 className={style.h3text}>
                Graphs 
            </h3>
            <h4> 
                &nbsp; &nbsp; 5.1.1 Graphs 
            </h4>   
            <h2 className={style.h2SectionColor} id="free">
                6. Free-falling bodies don&#39;t have constant a
            </h2>  
            <p>
                Free falling bodies...
            </p>
            <h3 className={style.h3num}> 
                6.1
            </h3> 
            <h3 className={style.h3text}>
                Approximations
            </h3> 
<h4> 
&nbsp; &nbsp; 6.1.1 Approximations 
</h4> 
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <OnedmEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br />
            <Link href="/education/gp1/23dm" className={style.backtoLink}>Motion in 2 and 3 dimensions &#10140;</Link> 
            <br /> 
            <br />                 
            <Helpful />
        </>
    );
}

export default Onedm;