import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewNl } from '@/pages/components/modoverview';
import NewtVid from '@/public/videos/gp1/newt';
import NlEx from '@/pages/exercises/gp1/nlex';
import Helpful from '@/pages/components/helpful';

const NewtLaws = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Newton&apos;s Laws of Motion
            </h1>
            <br></br>
            <ModoverviewNl />
            <br></br>
            <NewtVid />
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="nflaw">
                1. Newton&#39;s first law 
            </h2>
                <p className={style.pDefinition}>
                    Newton&apos;s first law states that an object in motion will remain in motion unless acted on by another; 
                    it also states that an object at rest will remain at rest unless acted on by another.
                </p>
                <h3>
                    1.1 Inertial frames
                </h3>
                <h3>
                    1.2 Validity 
                </h3>
                    <p>
                        Newton&#39;s first law is valid at speeds much less than the speed of light. Suffice it to say, 10&#37; of the speed of light!
                    </p>
            <h2 className={style.h2SectionColor} id="nslaw">
                2. Second law 
            </h2>
                <p>
                    Newton&#39;s second law is the statement that <b>F</b> = m <b>a</b>. 
                </p>
                <h3>
                    2.1 Functions of what
                </h3>
                    <p>
                        Forces originate from different things. For example, the gravitational force originates from the masses of the two objects 
                        and the distance between them. When objects become closer, the force increases; when the distance grows, the force weakens. 
                        A key point to understanding <b>F</b> = m <b>a</b> is knowing the independent variables. 
                    </p>
                    <p>
                        Force could be a function of distance, time, or other things. Sometimes solving the differential equation is 
                        straightforward, but sometimes it is not. We must figure out when we can easily solve it and when we cannot. 
            
                    </p>
                <h3>
                    2.2 Forces and momentum
                </h3>
                <h3>
                    2.3 Forces and mass
                </h3>
                <h3>
                    2.4 Single forces
                </h3>
                <h3>
                    2.5 Superposition of forces
                </h3>
                <h3>
                    2.6 Validity
                </h3>
                    <p>
                        Newton&#39;s first law is valid at speeds much less than the speed of light. Suffice it to say, 10% of the speed of light!
                    </p>
            <h2 className={style.h2SectionColor} id="ntl">
                3. Third law
            </h2>
                <h3>
                    3.1 Definition
                </h3>
                    <p>
                        Newton&apos;s third law states that when object A exerts a force on object B then 
                        object B exerts a force on object A of the same strength but directionally opposite to the force that A exerts on B. 
                    </p>
                <h3>
                    3.2 Validity
                </h3>
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
            <h2>
                Fundamental forces
            </h2>
                <p>
                    We push and pull things around us, and we are pushed and pulled. We push a bag, pull a rope, get pulled down by gravity, etc. 
                    There are four fundamental forces known today. They are 
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
                    With the range and relative strength 
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
                <h3>
                    Discussion
                </h3>
            <h2 className={style.summaryHeading}>
                Summary
           </h2>
            <p>Newton&#39;s laws form the foundation of classical mechanics.</p>
            <br></br>
            <br></br>
            <br></br>
            <NlEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default NewtLaws;