import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewWke } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import WkeVid from '@/public/videos/gp1/wke';
import Summary from '@/pages/components/summary';
import WkeEx from '@/pages/exercises/gp1/wkeex';
import Quizheading from '@/pages/components/quizHeading';
import Wkequiz from '@/pages/education/gp1/wke/quiz';
import Helpful from '@/pages/components/helpful';

const Wke = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Work and Kinetic Energy
            </h1>
            <ModoverviewWke />
            <br></br>
            <LearnGoal />
            <br />
            <WkeVid />
            <br></br>
            <p>
                In trying to solve physical problems, sometimes we can apply the strategy we used in the previous sections; that is, articulate newton&#39;s law for a situation, and if the differential equation is easy to solve, then solve it. However, sometimes the differential equation is not easy to solve, and that is when you result to other means to solve the problem. 
            </p>
            <p> 
                For example...
            </p> 
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                    Domain of work and kinetic energy  
            </h2>
            <p> 
                The domain of work and kinetic energy is... 
            </p>
            <br /> 
            <br />  
  <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
  <br />
            <br />
            <h2 className={style.h2SectionColor} id="wet">
                1. The work-energy theorem
            </h2>
            <p>
                The work-energy theorem...
            </p>
                <h3 className={style.h3num}>
                    1.1 
                </h3>
                <h3 className={style.h3text}>
                    In 1 d
                </h3>
                    <p>
                        The work energy theorem is 
                    </p>
                    <div className={style.equationBox}>
                        <div className={style.equation}>W = &#916;KE = 1/2 m v<sup>2</sup></div>
                        <div className={style.equationNumber}>&#40;1&#41;</div>
                    </div>
                    <h4>
                        &nbsp; &nbsp; 1.1.1 Work done by a constant force 
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.1.2 Work done by a varying force 
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.1.3 Work done by gravity 
                    </h4>
                <h3 className={style.h3num}>
                    1.2
                </h3>
                <h3 className={style.h3text}>
                    In 2 d
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.2.1 Work done by a constant force 
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.2.2 Work done by a varying force 
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.2.3 Work done by a spring 
                    </h4>
                <h3 className={style.h3num}>
                    1.3
                </h3>
                <h3 className={style.h3text}>
                    In 3 d
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.3.1 Work done by a constant force 
                    </h4>
                    <h4>
                        &nbsp; &nbsp; 1.3.2 Work done by a varying force 
                    </h4>
            <h2 className={style.h2SectionColor} id="pow">
                2. Power
            </h2>
                <p>
                    Power...
                </p>
            <h3 className={style.h3num}>
                    2.1
            </h3>
            <h3 className={style.h3text}>
                Rates
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.1.1 Rates
                </h4>
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <WkeEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <br /> 
            <Wkequiz />
            <br />
            <br />
            <Link href="/education/gp1/pu" className={style.backtoLink}>Potential energy &#38; energy conservation &#10140;</Link>  
             <br />  
             <br />                 
            <Helpful />
        </>
    );
}

export default Wke;