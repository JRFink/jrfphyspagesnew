import Link from 'next/link';
import style from '@/styles/general.module.css';

const Sample = () => { 
   return (
    <> 
        <br /> 
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
        <br />
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
                Choose 3
            </p>
            <p>
                <ul>
                    <li>
                        Describe an inertial reference frame
                    </li>
                    <br />
                    <div className={style.centerInADiv}>
                    <form>
                        <textarea id="messageText" className={style.shortResponse} placeholder=" An inertial reference frame..."/>
                        <br />
                        <br />
                    </form>
                    </div>
                    <li>
                        Describe how calculus relates to motion in one dimension
                    </li>
                    <br />
                    <div className={style.centerInADiv}>
                    <form >
                        <textarea id="messageText" className={style.shortResponse} placeholder=" Calculus..."/>
                        <br />
                        <br />
                    </form>
                    </div>
                    <li>
                        Discuss a physical situation where we use both an idealized model and a realistic model for the situation. 
                        How much error is introduced when we use the idealized model?
                    </li>  
                    <br />
                    <div className={style.centerInADiv}>
                    <form >
                        <textarea id="messageText" className={style.shortResponse} placeholder=" Idealized..."/>
                        <br />
                        <br />
                    </form>  
                    </div>
                    <li>
                        Why are rates of change important for motion?
                    </li> 
                    <br />
                    <div className={style.centerInADiv}>
                    <form >
                        <textarea id="messageText" className={style.shortResponse} placeholder=" Rates of change..."/>
                        <br />
                        <br />
                    </form>   
                    </div>                                        
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
                    <div className={style.centerInADiv}>
                        <form >
                            <textarea id="messageText" className={style.longResponse} placeholder=" The relation..."/>
                            <br />
                            <br />
                            {/* <button type="submit" className={style.greenButtonCont}>Submit</button> */}
                        </form>
                    </div>
                    <li>
                        What is an easy way to describe motion?
                    </li>
                    <br />
                    <div className={style.centerInADiv}>
                        <form >
                            <textarea id="messageText" className={style.longResponse} placeholder=" An easy..."/>
                            <br />
                            <br />
                            {/* <button type="submit" className={style.greenButtonCont}>Submit</button> */}
                        </form>
                    </div>
                    <li>
                        If you were developing theories of motion, how would you describe it?
                    </li>
                    <br />
                    <div className={style.centerInADiv}>
                        <form >
                            <textarea id="messageText" className={style.longResponse} placeholder=" Theory..."/>
                            <br />
                            <br />
                        </form>
                    </div>
                </ul>
            </p>
                <div className={style.centerInADiv}>
                    <button type="submit" className={style.greenButtonCont}>Submit exam</button>
                </div>
            <br />
            <br />
            <br />
            <p>
                Your score: __ / 100
            </p>
            <p>
                It will auto populate, except of course the written portion. 
            </p>
            
    </>
  );
}

export default Sample;