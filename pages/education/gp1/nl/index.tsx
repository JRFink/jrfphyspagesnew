import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewNl } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import NewtVid from '@/public/videos/gp1/newt';
import Summary from '@/pages/components/summary';
import NlEx from '@/pages/exercises/gp1/nlex';
// import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const NewtLaws = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Newton&apos;s Laws of Motion
            </h1>
            <br></br>
            <ModoverviewNl />
            <br /> 
            <LearnGoal />
            <h2> 
                Introduction 
            </h2>
                <p>
                    Now that we have a basic understanding of differential equations, we can study Newton&#39;s laws.
                </p> 
            <br /> 
            <NewtVid />
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                    Domain of Newton&#39;s laws  
            </h2>
                <p>
                    Where are Newton&#39;s laws valid? Well, it would simply be the domain where experiment agrees with what Newton&#39;s laws predict.  
                </p>
            <br /> 
            <br />  
  <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
  <br />
<p> 
      Consider a rocket going up. How would you characterize its motion?  
 </p>
            <br /> 
            <h2 className={style.h2SectionColor} id="nflaw">
                1. Newton&#39;s first law 
            </h2>
                <p className={style.pDefinition}>
                    Newton&apos;s first law states that an object in motion will remain in motion unless acted on by another; 
                    it also states that an object at rest will remain at rest unless acted on by another.
                </p>
            <h3 className={style.h3num}>
                1.1 
            </h3> 
            <h3 className={style.h3text}>
                Inertial frames
            </h3>
                <h4> 
                    &nbsp; &nbsp; 1.1.1 Inertial frames
                </h4>  
            <h3 className={style.h3num}>
                1.2 
            </h3> 
            <h3 className={style.h3text}>
                Validity
            </h3>
                <h4> 
                    &nbsp; &nbsp; 1.2.1 Validity
                </h4>            
        <h2 className={style.h2SectionColor} id="nslaw">
            2. Second law 
        </h2>
                <p>
                    Newton&#39;s second law is the statement that  
                </p>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}><b>F </b> &nbsp; = d<b>p</b>&#47;dt</div>
                    <div className={style.equationNumber}>&#40;1&#41;</div>
                </div>
                <br />
            <h3 className={style.h3num}>
                2.1 
            </h3> 
            <h3 className={style.h3text}>
                Functions of what
            </h3>
                <h4> 
                    &nbsp; &nbsp; 2.1.1 Functions of what
                </h4>                   
                    <p>
                        Forces originate from different things. For example, the gravitational force originates from the masses of the two objects 
                        and the distance between them. When objects become closer, the force increases; when the distance grows, the force weakens. 
                        A key point to understanding <b>F</b> = m <b>a</b> is knowing the independent variables. 
                    </p>
                    <p>
                        Force could be a function of distance, time, or something else. Sometimes solving the differential equation is 
                        straightforward, but other times it is not. We must figure out when we can easily solve it and when we cannot. 
                    </p>
            <h3 className={style.h3num}>
                2.2
            </h3> 
            <h3 className={style.h3text}>
                Forces and momentum
            </h3>
                <h4> 
                    &nbsp; &nbsp; 2.2.1 Forces
                </h4>
                <h4> 
                    &nbsp; &nbsp; 2.2.2 Momentum
                </h4>      
            <h3 className={style.h3num}>
                2.3 
            </h3> 
            <h3 className={style.h3text}>
                Forces and mass
            </h3>
                <h4> 
                    &nbsp; &nbsp; 2.3.1 Forces
                </h4>  
                <h4> 
                    &nbsp; &nbsp; 2.3.2 Mass 
                </h4>            
            <h3 className={style.h3num}>
                2.4 
            </h3> 
            <h3 className={style.h3text}>
               Single forces
            </h3>
            <h4> 
                &nbsp; &nbsp; 2.4.1 Single forces
            </h4>               
            <h3 className={style.h3num}>
                2.5
            </h3> 
            <h3 className={style.h3text}>
                Superposition of forces 
            </h3>
            <h4> 
                &nbsp; &nbsp; 2.5.1 Superposition of forces
            </h4>  
            <h3 className={style.h3num}>
                2.6
            </h3> 
            <h3 className={style.h3text}>
                Validity
            </h3>
            <h4> 
                &nbsp; &nbsp; 2.6.1 Validity
            </h4>    
                    <p>
                        Newton&#39;s second law is valid at speeds much less than the speed of light. Suffice it to say, 10% of the speed of light!
                    </p>
            <h2 className={style.h2SectionColor} id="ntl">
                3. Third law
            </h2>
            <p>
                The third law...
            </p>
            <h3 className={style.h3num}>
                3.1 
            </h3> 
            <h3 className={style.h3text}>
                Definition
            </h3>
            <h4> 
                &nbsp; &nbsp; 3.1.1 Definition
            </h4> 
                    <p>
                        Newton&apos;s third law states that when object A exerts a force on object B then 
                        object B exerts a force on object A of the same strength but directionally opposite to the force that A exerts on B. 
                    </p>
            <h3 className={style.h3num}>
                3.2
            </h3> 
            <h3 className={style.h3text}>
                Validity
            </h3>
                <h4> 
                    &nbsp; &nbsp; 3.2.1 Validity
                </h4>
                    <p>
                        Newton&#39;s third law is valid at speeds much less than the speed of light and when the particles carry neutral charge.
                        When the particles are charged and moving relative to one another, they exert magnetic forces on each other; 
                        these forces do not obey the third law force pair rule. For example, their directions can be at 90 degrees to each other. 
                        This has to do with the nature of the magnetic force and that there are different kinds of momentum. We will cover mechanical momentum in this class, 
                        which obeys the third law, but you can explore other kinds on your own.   
                    </p>
            <h2 className={style.h2SectionColor} id="free">
                4. Free-body diagrams
            </h2>
<Summary /> 
<br /> 
<br />
            <h2>
                Fundamental forces
            </h2>
                <p>
                    We push and pull things around us, and we are pushed and pulled. We push a bag, pull a rope, get pulled down by gravity, etc. 
                    Though, there are four fundamental forces known today. They are 
                    <ul>
                        <li>
                            Gravitational force
                        </li>
                        <li>
                            Electric force
                        </li>
                        <li>
                            Strong force
                        </li>
                        <li>
                            Weak force
                        </li>
                    </ul>
                    In terms of strength, relative, they are 
                    <ul>
                        <li>
                            Strong - 10^38
                        </li>
                        <li>
                            Electric - 10^36 
                        </li>
                        <li>
                            Weak - 10^25
                        </li>
                        <li>
                            Gravitational - 1
                        </li>
                    </ul>
                    With the relative strength and range
                    <ul>
                        <li>
                            Strong - 10^38 - 10^-15 m
                        </li>
                        <li>
                            Electric - 10^36 - inf range
                        </li>
                        <li>
                            Weak - 10^25 - 10^-18 m
                        </li>
                        <li>
                            Gravitational - 1 - inf range
                        </li>
                    </ul>
                    Read more about these things in the <Link href="/research/particle">particle physics</Link> section.
                </p>
            <h2 className={style.summaryHeading}>
                Summary
           </h2>
            <p>Newton&#39;s laws form the foundation of classical mechanics.</p>
            <br></br>
            <br></br>
            <br></br>
            <NlEx />
            <br></br>
            <br></br>
            {/* <OnedmQz /> */}
            <br />
            <br /> 
            <Link href="/education/gp1/applnl" className={style.backtoLink}>Applying Newton&#39;s laws &#10140;</Link>  
             <br />  
             <br />                             
             <Helpful />
        </>
    );
}

export default NewtLaws;