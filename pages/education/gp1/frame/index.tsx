import Link from 'next/link';
import style from '@/styles/general.module.css';
import UnitsVid from '@/public/videos/gp1/units';
import { ModoverviewFrames } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import FrameEx from '@/pages/exercises/gp1/frameex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
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
            <ModoverviewFrames />
            <br></br>
            <h2 className={style.h2SectionColor} id="frames">
                1. Reference frames 
            </h2>
            <br></br>
            <br></br>
            <p>
                Physics starts with a reference frame. Where are you? Where are you in relation to something else?
                These are what reference frames address. 
            </p>
            <h3>
                1.1 Your own frame
            </h3>
            <p>
                When thinking about physics, you should always define your own reference frame. This is very important. 
                For example, you could be at 0 meters; 5,280 feet; or &#40;10&#94;11 meters, 0, 0&#41;. 
                Knowing where you are will always help.
            </p>
            <h3>
                1.2 Frame relative to something else
            </h3>
            <h3>
                1.3 Physicists&#39; inertial and non-inertial frames
            </h3>
            <h2 className={style.h2SectionColor} id="units">
                2. Units 
            </h2>
            <br></br>
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
            <p>
                Unit conversion is the process of converting one unit to another. In order to convert one unit 
                to another, you have to multiply that unit by .... Let&#39;s go back to a very simple math concept. 
                What happens when you multiply by 1? You don&#39;t change the value. 2 * 1 is still 2. 
                3 bananas * 1 is still 3 bananas. So, when you have something with a unit, such as 2 miles, you can multiply that 
                by a unit ratio, which is the equivalent of multiplying by ..., and not change the value. 2 miles * fill = 3218 meters.
                What <em>unit ratio</em> would you use? Yes, because that doesn&#39;t .. the value. 
            </p>
            <h3>
                2.5 Dimensional analysis
            </h3>
            <p>
                Dimensional analysis is the process of making sure the units on your equations match.  
                {/* say you are solving for the momentum of something, and your final answer is 3 &nbsp;
                <math>
                    <mfrac>
                        <mn>kg</mn>
                        <mn>s</mn>
                    </mfrac>
                </math> . You will learn that the dimensions of momentum are &nbsp;
                <math>
                    <mfrac>
                        <mn>Mass * length</mn>
                        <mn>time</mn>
                    </mfrac>
                </math>, so 3 &nbsp;
                <math>
                    <mfrac>
                        <mn>kg</mn>
                        <mn>s</mn>
                    </mfrac> 
                </math> &nbsp; would be &nbsp;
                <math>
                    <mfrac>
                        <mn>mass</mn>
                        <mn>time</mn>
                    </mfrac>
                </math>, so we have made a dimensional mistake.  */}
            </p>
            <h3>
                2.6 Government standards
            </h3>
            <p>
                Government standards are <em>very</em> interesting. Find some of <Link href="https://www.nist.gov/">America&#39;s</Link> here. 
                Government, and more broadly international, standards are important because whether we like it or not we live in a global society.
            </p>
            <h2 className={style.h2SectionColor} id="measurement">
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
            <Summary />
            
            <br></br>
            <br></br>
            <FrameEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default Uvec;