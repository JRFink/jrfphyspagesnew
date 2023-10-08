import Link from 'next/link';
import style from '@/styles/general.module.css';

const Sample = () => { 
   return (
    <> 
        <br /> 
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
        <br />
        <h1 className={style.centerText}>
            Sample exam 
        </h1>
            <p>
                Score is out of 100 points. 
            </p>
            <br />
        <h2>
            Multiple choice 
        </h2>
         <p>
        <ol>
            <p>
                <b>Frames, units, and measurement</b>
            </p>
                 <li>
                    Describe a frame in 3 coordinates
                </li>
                 <li>
                    Describe a frame in 3 linear coordinates
                </li>
            <p>
                <b>Vectors</b>
            </p>
                 <li>
                    Consider a vector A and vector B whose dot product is 1/2 their magnitudes multiplied. What is the angle between them?
                </li>
            <p>
                <b>Calc</b>
            </p>
                 <li>
                    Describe a rate of change
                </li>
            <p>
                <b>Idealized models</b>
            </p>
                 <li>
                    Describe the realistic model of gravity and the idealized model of gravity.
                </li>
            <p>
                <b>Motion in 1, 2, and 3 dimensions</b>
            </p>
            <p>
                In these problems assume that gravity is approximately constant 
            </p>
                 <li>
                    A particle starts at x = 2 m on the x axis, moving with v<span><sub>0</sub></span> = 3 m/s. Where is it after 7 seconds? 
                </li>
             </ol>
         </p>
        <br />
        <h2>
            Short response
        </h2>
            <p>
                <ul>
                    <li>
                        Describe an inertial reference frame
                    </li>
                    <li>
                        Describe how calculus relates to motion in one dimension
                    </li>
                    <li>
                        Discuss a physical situation where we use both an idealized model and a realistic model for the situation. 
                        How much error is introduced when we use the idealized model?
                    </li>    
                    <li>
                        Why are rates of change important for motion?
                    </li>                                            
                </ul>
            </p> 
            <br />
        <h2>
            Long response
        </h2>
            <p>
                Choose 2
            </p>
            <p> 
            <ul>
                <li>
                    Relate 1 dimensional motion to 2 dimensional motion
                </li>
                <br />
                <form >
                    <textarea id="messageText" className={style.messageBox} placeholder=" The relation..."/>
                    <br />
                    <br />
                    {/* <button type="submit" className={style.greenButtonCont}>Submit</button> */}
                </form>
                <li>
                    What is an easy way to describe motion?
                </li>
                <br />
                <form >
                    <textarea id="messageText" className={style.messageBox} placeholder=" An easy..."/>
                    <br />
                    <br />
                    {/* <button type="submit" className={style.greenButtonCont}>Submit</button> */}
                </form>
                <li>
                    If you were developing theories of motion, how would you describe it?
                </li>
            </ul>
            </p>
    </>
  );
}

export default Sample;