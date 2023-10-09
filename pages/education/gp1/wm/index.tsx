import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewWm } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import WmEx from '@/pages/exercises/gp1/wmex';
import Quizheading from '@/pages/components/quizHeading';
import Helpful from '@/pages/components/helpful';

const Wave = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Wave Motion
            </h1>
            <br></br>
            <ModoverviewWm />
            <br /> 
            <LearnGoal />
            <br /> 
            <h2> 
                Introduction
            </h2>
            <p> 
                Moving from oscillations we proceed to waves. We will see a lot of the same sines and cosines, though in a slightly different form. 
            </p> 
            <p> 
                Many things in our world are wave-like. For example, water proceeds on the ocean&#39;s surface in the form of a wave; an earthquake propogates through earth&#39;s crust in the form of a wave. And you can shake a long rope to form a wave.  
            </p>
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                Domain of wave motion
            </h2>
            <p> 
                The domain of wave motion is... 
            </p>
            <br /> 
            <br />  
            <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
            <br />
                <p> 
                    Consider a clothes line, about 10 m long. One end is fixed, and you snap the other end with an 
                </p>
            <br /> 
            <h2 className={style.h2SectionColor} id="osc">
                1. Connection to oscillations
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="type">
                2. Types of wave motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="desc">
                3. Describing wave motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="en">
                4. Energy in waves
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="wave">
                5. Wave equation
            </h2>
            <br></br>
                <p> 
                     The wave equation is   
                 </p> 
                 <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}>&#948; <span><sup>2</sup></span>f / dg<span><sup>2</sup></span> = a &nbsp; &#948; <span><sup>2</sup></span>f / dq<span><sup>2</sup></span></div> 
                     <div className={style.equationNumber}>&#40;1&#41;</div> 
                 </div> 
                 <br />
            <br></br>
            <h2 className={style.h2SectionColor} id="sup">
                6. Superposition
            </h2>
            <br />
            <br />
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <WmEx />
            <br></br>
            <br></br>
            {/* <OnedmQz /> */}
            <br />
            <br /> 
            <Link href="/education/gp1/theat" className={style.backtoLink}>Temperature &#38; heat &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default Wave;