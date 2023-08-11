import Link from 'next/link';
import style from '@/styles/general.module.css';
import ConstantPosVid from '@/public/videos/gp1/constantpos';
import AccelVid from '@/public/videos/gp1/accelvid';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import { Modoverview1dm } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import OnedmEx from '@/pages/exercises/gp1/1dmex';
import Helpful from '@/pages/components/helpful';



const Onedm = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Motion in 1 Dimension
            </h1>
            <Modoverview1dm />
            <h2 className={style.h2SectionColor} id="pos">
                1. Position and displacement
            </h2>
            <br></br>
            <ConstantPosVid />
            <br></br>
            <h3>
                1.1 Definitions
            </h3>
            <h3>
                1.2 Examples
            </h3>
            <h2 className={style.h2SectionColor} id="vel">
                2. Velocity
            </h2>
            <h3>
                2.1 Average and instantaneous
            </h3>
            <h2 className={style.h2SectionColor} id="speed">
                3. Speed
            </h2>
            <h3>
                3.1 Average and instantaneous
            </h3>
            <h2 className={style.h2SectionColor} id="accel">
                4. Acceleration
            </h2>
            <br></br>
            <AccelVid />
            <br></br>
            <h3>
                4.1 Average and instantaneous
            </h3>
            <h3>
                4.2 Motion with constant a
            </h3>
            <br></br>
            <DeriveKinVid />
            <br></br>
            <h3>
                4.3 Motion with non-constant a
            </h3>
            <h2 className={style.h2SectionColor} id="calc">
                5. Calculus examples
            </h2>
            <h3>
                5.1 Graphs
            </h3>
            <h2 className={style.h2SectionColor} id="free">
                6. Free-falling bodies don&#39;t have constant a
            </h2>  
            <h3>
                6.1 Approximations
            </h3>  
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <OnedmEx />
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Onedm;