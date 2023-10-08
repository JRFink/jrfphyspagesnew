import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewCalc } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary'; 
import CalcEx from '@/pages/exercises/gp1/calcex';
import Quizheading from '@/pages/components/quizHeading';
import Helpful from '@/pages/components/helpful';

const Calc = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Calc review
            </h1>
            <br></br>
            <ModoverviewCalc />
            <br></br>
<LearnGoal />
<h2> 
Introduction 
</h2>
            <br></br>
            <h2 className={style.h2SectionColor} id="approx">
                1. Approximations
            </h2>
                <br></br>
                <br></br>
                <p>
                    The whole idea of calc is to make better and better approximations. For example, say you have a giant jar of gumballs. 
                    How many gum balls are in this jar?
                </p>
                <p>
                    You start by guessing, say, 100. Then some person who knows how many are in there says no. You start thinking, 
                    well about how many gum balls are stacked on top of eachother? 10. And about how many are there from front to back? 
                    5. And it&#39;s about 5 wide. Ok so 250. He still says no. Ok so each gum ball is about 1 cm wide and 1 cm tall, and there&#39;s maybe about 1/3 
                    of that volume between each gumball. So 250 * &#40;1 - 1/3&#41; = 167 gum balls. 
                </p>
                <p>
                    And you keep going and going and making better approximations. 
                </p>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="rate">
                2. Rates of change
            </h2>
                <p>
                    So what&#39;s the deal with the power rule and tangents? 
                </p>
                <p>
                    Let&#39;s get into it! 
                </p>
                <h3 className={style.h3num}>
                    2.1
                </h3>
                <h3 className={style.h3text}>
                    Tangents
                </h3>
                    <p>
                        Take a simple parabola and define two points on them. 
                        Draw a line connecting them. Find the slope, find it graphically. 
                        Now keep one of the points fixed and drag the other point a little closer to the other one. 
                        Find the slope. 
                        Do this again. Keep the original point fixed, and drag the original point <em>along the curve</em> closer to the first point. 
                        Find its slope. 
                        Keep doing this. 
                    </p>
                  <h3 className={style.h3num}> 
                     2.2 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Rates of change
                 </h3>              
                    <p>
                        And voila, the rate of change. 
                    </p>

                 <h3 className={style.h3num}> 
                     2.3
                 </h3> 
                <h3 className={style.h3text}> 
                     Plotting rates of change 
                 </h3> 
                 <p>
                        Now the interesting part. Let&#39;s do some plotting. Keep the independent variable axis the same, but 
                        for the dependent variable axis use what you found above. Start plotting. 
                    </p>
                <h3 className={style.h3num}> 
                     2.4 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Adding rates of change for a certain period
                 </h3>
                    <p>
                        Now think about how you use a rate to find the change of something.
                    </p>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="ex">
                3. Example with 1 dimensional motion
            </h2>
                
                <h3 className={style.h3num}> 
                     3.1 
                 </h3> 
                 <h3 className={style.h3text}> 
                     Adding up the changes in position
                 </h3> 
                 <h4>
                     &nbsp; &nbsp; 3.1.1 Adding  
                 </h4>             
                <h3 className={style.h3num}> 
                     3.2
                 </h3> 
                 <h3 className={style.h3text}> 
                     Adding up changes in velocity 
                 </h3>
                 <h4> 
                     &nbsp; &nbsp; 3.2.1 Adding
                 </h4>
                  
            <h2 className={style.h2SectionColor} id="pow">
                Power rule just for fun
            </h2>
            <br></br>
            <br></br>
                <p>
                    The development of calculus has a long history. It didn&#39;t simply start with &#34;Newton&#34;. 
                    A huge part of modern day calc is the power rule, what you learn as a shortcut. 
                    But how do you get the power rule?
                </p>
            <br></br>
            <Summary />
            <br></br>
            <br></br>
            <CalcEx />
            <br></br>
            <br /> 
            <Quizheading />
            <br />
            <br />
            <Link href="/education/gp1/1dm" className={style.backtoLink}>Motion in 1 dimension &#10140;</Link>  
            <br /> 
            <br />
            <Helpful />
        </>
    );
}

export default Calc;