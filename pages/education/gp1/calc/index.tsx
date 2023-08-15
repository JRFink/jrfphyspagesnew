import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewCalc } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary'; 
import Helpful from '@/pages/components/helpful';

const Calc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Big calc review
            </h1>
                <p> 
                    This is not meant to teach you calc from the ground up; it&#39;s meant to help. 
                </p>
            <br></br>
            <br></br>
            <ModoverviewCalc />
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="approx">
                1. Approximations
            </h2>
                <br></br>
                <br></br>
                <p>
                    The whole idea with calc is to make better and better approximations. For example, say you have a giant jar of gumballs. 
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
                2. Rate of change
            </h2>
                <p>
                    So what&#39;s the deal with the power rule and tangents? 
                </p>
                <p>
                    Let&#39;s get into it! 
                </p>
                <h3>
                    2.1 Tangents
                </h3>
                <h3>
                    2.2 Rates of change
                </h3>
                <h3>
                    2.3 Plotting rates of change
                </h3>
                <h3>
                    2.4 Adding rates of change for a certain period
                </h3>
            <h2 className={style.h2SectionColor} id="ex">
                3. Example with 1 dimensional motion
            </h2>
                <h3>
                    3.1 Adding up the changes in position
                </h3>
                <h3>
                    3.2 Adding up changes in velocity
                </h3>
            <Summary />
            <br></br>
            <Helpful />
        </>
    );
}

export default Calc;