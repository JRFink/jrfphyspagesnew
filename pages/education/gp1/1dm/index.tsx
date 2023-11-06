import Link from 'next/link';
import style from '@/styles/general.module.css';
import AccelVid from '@/public/videos/gp1/accelvid';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import { Modoverview1dm } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import OnedmEx from '@/pages/exercises/gp1/1dmex';
import Quizheading from '@/pages/components/quizHeading';
import Onedmquiz from '@/pages/education/gp1/1dm/quiz';
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
            <p>
                After going through this section, you should be able to 
                <ul>
                    <li>Solve for the position of an airplane as a function of time along the x axis</li>
                </ul>
            </p>
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
            <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2> 
            <br />
            <p>
                Consider the problem of a block sliding on frictionless ice to the right.  
            </p>
            <br />
            <h2 className={style.h2SectionColor} id="pos">
                1. Position and displacement
            </h2>
            <br />
            <br />
            <p className={style.centerText}> 
                Buy the position and velocity video on our <Link href="/members">members</Link> page. 
            </p>

                <h3 className={style.h3num}> 
                     1.1 
                </h3> 
                <h3 className={style.h3text}> 
                    Definitions
                </h3>  
                <p>
                    If a body is moving along the x axis in one dimension, the displacement is
                </p> 
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}> &#916; x = x<span><sub>2</sub></span> &nbsp; - x<span><sub>1</sub></span></div>  
                    {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                </div>
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
                    <br />
                    <p>
                        We define the average velocity as
                    </p>
                    <br />
                    <div className={style.equationBox}>
                        <div className={style.equation}> <b>v</b> <span><sub>avg </sub></span> &nbsp; = &#40; <b>x</b> <span><sub>2</sub></span> &nbsp; - 
                            <b>x</b> <span><sub>1</sub></span> &#41; / &#40; t<span><sub>2</sub></span> &nbsp; - t<span><sub>1</sub></span> &#41; 
                            = &#916;  <b> x</b> &nbsp; / &#916; t    </div>  
                        {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                    </div>
                    <h4>
                        &nbsp; &nbsp; 2.1.2 Instantaneous
                    </h4>
                    <p>
                        We define the instantaneous velocity as
                    </p>
                    <br />
                    <div className={style.equationBox}>
                        <div className={style.equation}> <b>v</b> <span><sub>inst </sub></span> &nbsp; = Lim <span><sub>&#916; t &#10140; 0 &nbsp; </sub></span> 
                            &#40; <b>x</b> <span><sub>2</sub></span> &nbsp; - &nbsp; <b>x</b> <span><sub>1</sub></span> &#41; / &#40; t<span><sub>2</sub></span> &nbsp; - t<span><sub>1</sub></span> &#41;
                            = &#916; <b>x</b> &nbsp; / &#916; t
                        </div>  
                        {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                    </div>
                    <br />
                    <p>
                        It is what the slope approaches at a very short change in time. 
                    </p>
                <br />
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
                    <p>
                        We define the average speed as
                    </p>
                    <br />
                    <div className={style.equationBox}>
                        <div className={style.equation}> v <span><sub>avg </sub></span> &nbsp; = &#40; x <span><sub>2</sub></span> &nbsp; - 
                            x <span><sub>1</sub></span> &#41; / &#40; t<span><sub>2</sub></span> &nbsp; - t<span><sub>1</sub></span> &#41; 
                            = &#916;  x &nbsp; / &#916; t    
                        </div>  
                        {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                    </div>
                <h4> 
                    &nbsp; &nbsp; 3.1.2 Instantaneous
                </h4>
                    <p>
                        We define the instantaneous speed as
                    </p>
                    <br />
                    <div className={style.equationBox}>
                        <div className={style.equation}> v <span><sub>inst </sub></span> &nbsp; = Lim <span><sub>&#916; t &#10140; 0 &nbsp; </sub></span> 
                            &#40; x <span><sub>2</sub></span> &nbsp; - &nbsp; x <span><sub>1</sub></span> &#41; / &#40; t<span><sub>2</sub></span> &nbsp; - t<span><sub>1</sub></span> &#41;
                            = &#916; x &nbsp; / &#916; t
                        </div>  
                        {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                    </div>
                    <br />
<br />
<h2 className={style.greenExample}>
   Example
</h2>
<br />
                    <br />
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
                    <br />
                        <p>
                            We define the average acceleration as
                        </p>
                        <br />
                        <div className={style.equationBox}>
                            <div className={style.equation}> <b>a</b> <span><sub>avg </sub></span> &nbsp; = &#40; <b>v</b>
                                <span><sub>2</sub></span> &nbsp; - &nbsp; <b>v</b> <span><sub>1</sub></span> &#41; / &#40; 
                                t<span><sub>2</sub></span> &nbsp; - t<span><sub>1</sub></span> &#41; = &#916;  
                                <b>v</b> &nbsp; / &#916; t    
                            </div>  
                            {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                        </div> 
<br /> 
<br />
<h2 className={style.greenExample}> 
    Example 
 </h2>
<br />
                        <h4> 
                            &nbsp; &nbsp; 4.1.2 Instantaneous 
                        </h4>  
                        <p>
                            We define the instantaneous acceleration as
                        </p>
                        <br />
                        <div className={style.equationBox}>
                            <div className={style.equation}> <b>a</b> <span><sub>inst </sub></span> &nbsp; = Lim <span><sub>&#916; 
                                t &#10140; 0 &nbsp; </sub></span> &#40; <b>v</b> <span><sub>2</sub></span> &nbsp; - &nbsp; 
                                <b>v</b> <span><sub>1</sub></span> &#41; / &#40; t<span><sub>2</sub></span> &nbsp; - 
                                t<span><sub>1</sub></span> &#41;= &#916; <b>v</b> &nbsp; / &#916; t
                            </div>  
                            {/* <div className={style.equationNumber}>&#40; &#41;</div> */}
                        </div>     
                <br />    
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
                <div className={style.equation}>x = x<span><sub>0</sub></span> + v t</div>  
                <div className={style.equationNumber}>&#40; &#41;</div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>v = v<span><sub>0</sub></span> + a t</div>
                    <div className={style.equationNumber}>&#40; &#41;</div>
            </div>
            <div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>x = x<span><sub>0</sub></span> + v<span><sub>0</sub></span> t + 1/2 a t<sup> 2</sup></div>
                    <div className={style.equationNumber}>&#40; &#41;</div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>v <span><sup>2</sup></span> = v<span><sub>0</sub></span><span><sup>2</sup></span> + 2 a &#916; x</div>
                    <div className={style.equationNumber}>&#40; &#41;</div>
            </div>
                <br />
<h2 className={style.greenExample}> 
    Example 
 </h2>
<br /> 
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
                <p>
                    The equations you will use in one dimensional motion are 
                </p>
            
            <br></br>
            <div className={style.equationBox}>
                <div className={style.equation}>x = x<span><sub>0</sub></span> + v t</div>
                </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>v = v<span><sub>0</sub></span> + a t</div>
            </div>
            <div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>x = x<span><sub>0</sub></span> + v<span><sub>0</sub></span> t + 1/2 a t<sup> 2</sup></div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>v <span><sup>2</sup></span> = v<span><sub>0</sub></span><span><sup>2</sup></span> + 2 a &#916; x</div>
            </div>
            <br></br>
            <OnedmEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <br />
            <Onedmquiz />
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