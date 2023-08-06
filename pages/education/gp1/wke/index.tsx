import Link from 'next/link';
import WkeVid from '@/public/videos/gp1/wke';
import style from '@/styles/general.module.css';
import WkeEx from '@/pages/exercises/gp1/wkeex';
import Helpful from '@/pages/components/helpful';

const Wke = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Work and Kinetic Energy
            </h1>
            <br></br>
            <WkeVid />
            <br></br>
            <h2 className={style.h2SectionColor}>
                1. The work-energy theorem
            </h2>
                <h3>
                    1.1 In 1 d
                </h3>
                    <h4>
                        1.1.1 Work done by a constant force 
                    </h4>
                    <h4>
                        1.1.2 Work done by a varying force 
                    </h4>
                    <h4>
                        1.1.3 Work done by gravity 
                    </h4>
                <h3>
                    1.2 In 2 d
                </h3>
                    <h4>
                        1.2.1 Work done by a constant force 
                    </h4>
                    <h4>
                        1.2.2 Work done by a varying force 
                    </h4>
                    <h4>
                        1.2.3 Work done by a spring 
                    </h4>
                <h3>
                    1.3 In 3 d
                </h3>
                    <h4>
                        1.3.1 Work done by a constant force 
                    </h4>
                    <h4>
                        1.3.2 Work done by a varying force 
                    </h4>
            <h2 className={style.h2SectionColor}>
                2. Power
            </h2>
            <h3>
                2.1 Rates
            </h3>
            <h2 className={style.summaryHeading}>
                Summary
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <WkeEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Wke;