import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import UnitsVid from '@/public/videos/gp1/units';
import { ModoverviewFrames } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import frames from '@/public/images/frames.svg';
import Summary from '@/pages/components/summary';
import FrameEx from '@/pages/exercises/gp1/frameex';
import Quizheading from '@/pages/components/quizHeading';
import Framequiz from '@/pages/education/gp1/frame/quiz';
import Helpful from '@/pages/components/helpful';

const Uvec = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <br></br>
            <h1 className={style.centerText}>
                Frames, units, and measurement
            </h1>
            <br></br>
            <ModoverviewFrames />
            <br></br>
            <LearnGoal />
            <ol> 
            <li>
                Be able to describe an inertial reference frame. 
            </li>
            <li> 
                Be able to describe 3 unit systems and convert between unit systems. 
            </li>
            <li> 
                Be able to describe measurement, use significant figures, amd determine uncertainty. 
            </li> 
            </ol>
            <h2> 
            Introduction 
            </h2>
            <h2 className={style.h2SectionColor} id="frames">
                1. Reference frames 
            </h2>
            <br></br>
            <br></br>
            <p>
                Physics starts with a reference frame. Where are you? Where are you in relation to something else?
                These are what reference frames address. 
            </p>
            <h3 className={style.h3num}>
                1.1 
            </h3>
            <h3 className={style.h3text}>
                Your own frame
            </h3>
                <p>
                    When thinking about physics, you should always define your own reference frame. This is very important. 
                    For example, you could be at 0 meters; 5,280 feet; or &#40;10&#94;11 meters, 0, 0&#41;. 
                    Knowing where you are always helps.
                </p>
            <h3 className={style.h3num}>
                1.2
            </h3>
          <h3 className={style.h3text}>
                Frame relative to something else
            </h3>
            <br />
            <div  
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                }} 
            > 
                <Image 
                    src={frames} 
                    style={{ 
                        width: '80%', 
                        borderRadius: "20px", 
                        height: 'auto' 
                    }} 
                    sizes="100vw" 
                    alt="A blue block attached to a black spring attached to a wall"  
                /> 
            </div>
                <br />
                <p>
                    We often want to describe a frame relative to something else. Specifically, we want to describe an object moving in a fixed frame. 
                    For example, say you want to describe a block moving along frictionless ice. If you want to say something 
                    meaningful about it, then you have to fix...
                </p>
            <h3 className={style.h3num}>
                1.3
            </h3>
            <h3 className={style.h3text}>
                Inertial and non-inertial frames
            </h3>
            <p>
                An important aspect of physics is the inertial frame. 
                The inertial frame means a frame in which an object is observed to move with constant velocity. 
            </p>
                <h4>
                    &nbsp; &nbsp; 1.3.1 Inertial
                </h4>
<h2 className={style.greenExample}> 
    Example 
 </h2>
                <h4>
                    &nbsp; &nbsp; 1.3.2 Non-inertial
                </h4>
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
            <h3 className={style.h3num}>
                2.1
            </h3>
            <h3 className={style.h3text}>
                SI Units
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.1.1 Mass
                </h4>
                    <p>
                        &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://www.nist.gov/pml/owm/si-units-mass">mass</a>
                    </p>
                <h4>
                    &nbsp; &nbsp; 2.1.2 Length
                </h4>
                <h4>
                    &nbsp; &nbsp; 2.1.3 Time
                </h4>
            <h3 className={style.h3num}>
                2.2
            </h3>
            <h3 className={style.h3text}>
                British system
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.2.1 Mass
                </h4>
                <h4>
                    &nbsp; &nbsp; 2.2.2 Length
                </h4>
                <h4>
                    &nbsp; &nbsp; 2.2.3 Time
                </h4>
            <h3 className={style.h3num}>
                2.3
            </h3>
            <h3 className={style.h3text}>
                Other systems
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.3.1 Other
                </h4>
            <h3 className={style.h3num}>
                2.4
            </h3>
            <h3 className={style.h3text}>
                Unit conversion
            </h3>
                <h4>
                    &nbsp; &nbsp; 2.4.1 Conversion
                </h4>
<h2 className={style.greenExample}> 
    Example 
 </h2>
                    <p>
                        Unit conversion is the process of converting one unit to another. In order to convert one unit 
                        to another, you have to multiply that unit by .... Let&#39;s go back to a very simple math concept. 
                        What happens when you multiply by 1? You don&#39;t change the value. 2 * 1 is still 2. 
                        3 bananas * 1 is still 3 bananas. So, when you have something with a unit, such as 2 miles, you can multiply that 
                        by a unit ratio, which is the equivalent of multiplying by ..., and not change the value. 2 miles * fill = 3218 meters.
                        What <em>unit ratio</em> would you use? Yes, because that doesn&#39;t .. the value. 
                    </p>
            <h3 className={style.h3num}>
                2.5
            </h3>
            <h3 className={style.h3text}>
                Dimensional analysis
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
<h2 className={style.greenExample}> 
    Example 
 </h2>
            <h3 className={style.h3num}>
                2.6
            </h3>
            <h3 className={style.h3text}>
                Government standards
            </h3>
                <p>
                    Government standards are interesting. Find some of <Link href="https://www.nist.gov/">America&#39;s</Link> here. 
                    Also, international standards are important because we live in a global society.
                </p>
            <br></br>
            <h2 className={style.h2SectionColor} id="measurement">
                3. Measurement
            </h2>
            <p>
                Measurement involves the process of assigning a number with a unit to an experiment. For example, let&#39;s say 
                you want to measure where your pencil is on a piece of paper. You mark an origin, then take a ruler and measure 
                how far to your pencil. You measure about 3 cm, notice there is some uncertainty, maybe a few milimeters,
                and say something like 3 cm &#177; 2 mm. You have made a measurement.
            </p>
            <h3 className={style.h3num}>
                3.1
            </h3>
            <h3 className={style.h3text}>
                How to measure
            </h3>
                <p>
                    How you measure depends upon what you want to measure. In gen phys 1, you will be measuring things like position
                    and changes in position, as well as velocity and changes in energy indirectly.
                </p>
            <h3 className={style.h3num}>
                3.2
            </h3>
            <h3 className={style.h3text}>
                Significant figures 
            </h3>
                <p>
                    Significant figures are a pain. Nonetheless, they are important and we will use them in this class. You will 
                    impress all your friends when you correctly use significant figures. The metrologists will also love you. 
                </p>
<h2 className={style.greenExample}> 
    Example 
 </h2>
            <h3 className={style.h3num}>
                3.3
            </h3>
            <h3 className={style.h3text}>
                Uncertainty in measurement
            </h3>
                <p>
                    Every measurement has some kind of uncertainty. Even at the precision of atoms there is some <Link href="https://plato.stanford.edu/entries/qt-uncertainty/">level of uncertainty</Link>. 
                    Why is an interesting question. At this level, though, we&#39;ll just cover basic uncertainty and how to deal with it. 
                </p>
            <br />
            <Summary />
            <p>
                Physics starts with a reference frame. An easy way to think about this is where you are and other things in relation to you. 
                Then you can start drawing connections from one thing to another, and create different frames and relations between things. 
            </p>
            <p>
                Once you have a frame, you can articulate units for physical quantities. These units combine together to form other units, 
                and sooner or later you have a whole web of units and physical quantities. 
            </p>
            <p>
                Once you have a frame and units, you can start to make measurements. You use rulers, stop watches, geiger counters, and you 
                observe what the measurements produce. 
            </p>
            <p>
                Now that you have started to make measurements, you can plot those on a graph and start coming up with some formulas. 
                That brings us to our next section - motion in <Link href="/education/gp1/1dm">1 dimension</Link> - &#40;but first, we have to do some vector and calc review. 
                If you know these well, feel free to skip them&#41; !
            </p>
            <p>
                Also, you have to do the <a href="#exerc" className={style.markExercise}>exercises</a> and take the <a href="#quiz" className={style.markQuiz}>quiz</a> below!
            </p>
            <Summary />
            <br></br>
            <br></br>
            <FrameEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <Framequiz />
            <br /> 
            <br /> 
            <Link href="/education/gp1/vec" className={style.backtoLink}>Vectors &#10140;</Link> 
            <br /> 
            <br /> 
            <Link href="/education/gp1/calc" className={style.backtoLink}>Calc review &#10140;</Link> 
            <br /> 
            <br /> 
            <Link href="/education/gp1/1dm" className={style.backtoLink}>Motion in 1 dimension &#10140;</Link> 
            <br /> 
            <br /> 
            <br /> 
            <Helpful />
        </>
    );
}

export default Uvec;