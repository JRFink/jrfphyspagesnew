import Link from 'next/link';
import Image from 'next/image';
import UnitsVid from '@/public/videos/gp1/units';
import style from '@/styles/general.module.css';
import Modoverview from '@/pages/components/modoverview';
import vidicon from '@/public/images/vidicon.png';
import FrameEx from '@/pages/exercises/gp1/frameex';
import Helpful from '@/pages/components/helpful';

const Uvec = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <br></br>

            <h1 className={style.centerText}>
                Frames, units, and measurement
            </h1>
            <br></br>
            <Modoverview />
            <br></br>
            <br></br>
            <Image
                    src={vidicon}
                    style={{
                        width: '3%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Black video icon" 
            />
            <p className={style.inlineContainer}>
                Reference frames
            </p>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor}>
                1. Frames 
            </h2>
            <h3>
                1.1 Your own frame
            </h3>
            <h3>
                1.2 Frame relative to something else
            </h3>
            <h3>
                1.3 Physicists&#39; inertial and non-inertial frames
            </h3>
            <h2 className={style.h2SectionColor}>
                2. Units 
            </h2>
            <br></br>
            <UnitsVid />
            <br></br>
            <p>
                Physics describes the world in something called <em>units</em>. 
                A unit is a <em>standard</em> to which we compare everything else. 
                What does 3 meters mean? <br></br> <br></br>
                Meters is the unit, of length, 
                so 3 meters means three of whatever the standard for &apos;1 meter&apos; is.  
            </p>
            <h3>
                2.1 SI Units
            </h3>
            <h3>
                2.2 British system
            </h3>
            <h3>
                2.3 Other systems
            </h3>
            <h3>
                2.4 Unit conversion
            </h3>
            <h3>
                2.5 Dimensional analysis
            </h3>
            <h3>
                2.6 Government standards
            </h3>
            <h2 className={style.h2SectionColor}>
                3. Measurement
            </h2>
            <h3>
                3.1 How to measure
            </h3>
            <h3>
                3.2 Significant figures 
            </h3>
            <h3>
                3.3 Errors in measurement
            </h3>
            <h2 className={style.h2SectionColor}>
                Summary 
            </h2>
            
            <br></br>
            <br></br>
            <FrameEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Uvec;