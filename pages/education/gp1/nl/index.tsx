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
            <h2 className={style.h2SectionColor} id="nslaw">
                2. Second law 
            </h2>
                <p>
                    ... math implementation ... 
                </p>
                <h3>
                    2.1 Forces and momentum
                </h3>
                <h3>
                    2.2 Forces and mass
                </h3>
                <h3>
                    2.3 Single forces
                </h3>
                <h3>
                    2.4 Superposition of forces
                </h3>
            <h2 className={style.h2SectionColor} id="ntl">
                3. Third law
            </h2>
                <p>
                    Newton&apos;s third law states that when object A exerts a force on object B then 
                    object B exerts a force on object A of the same strength but directionally opposite to the force that A exerts on B. 
                </p>
            <h2 className={style.h2SectionColor} id="free">
                4. Free-body diagrams
            </h2>
            <h2>
                Fundamental forces
            </h2>
                <h3>
                    Discussion
                </h3>
            <h2 className={style.summaryHeading}>
                Summary
           </h2>
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