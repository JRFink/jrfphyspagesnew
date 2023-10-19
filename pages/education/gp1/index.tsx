import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful/$gp1'


const Gp1 = () => {
    return (
        <>
            <br />
            <Link href="/education/classes" className={style.backtoLink}>Classes</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                General Physics 1
            </h1>    
            <p>
                Hello, and welcome to gen phys 1! This class is meant to be awesome; 
                it is the equivalent of a gen phys 1 class you would take in high school or college. You will learn about 
                forces, motion, vectors, newton&#39;s laws, angular momentum, taylor expansion, and even differential equations. 
                I am offering this as an online class where you can work at your own pace. 
                I don&#39;t have all the implementation yet, but I have the topical structure. 
                Take a look below. 
            </p>
            <br></br>
            <div className={style.flexContainer} id="intro">
                <Link href="/education/gp1/vid" className={style.styleCourseNav}>Videos</Link>
                <Link href="/education/gp1/quiz" className={style.styleCourseNav}>Quizzes</Link> 
                <Link href="/education/gp1/hw" className={style.styleCourseNav}>Homework</Link>  
                <Link href="/education/gp1/equat" className={style.styleCourseNav}>Equations</Link>
                <Link href="/education/gp1/stuff" className={style.styleCourseNav}>Find your hw problem</Link>
                {/* <Link href="/education/gp1/prob" className={style.styleCourseNav}>Real world problems</Link> */}
                {/* <Link href="/education/gp1/expver" className={style.styleCourseNav}>Experimental verification</Link> */}
                <Link href="/education/gp1/syll" className={style.styleCourseNav}>Syllabus</Link>
                <Link href="/education/gp1/exam" className={style.styleCourseNav}>Exam information</Link>
            </div>
            <br></br>
            <Link href="/education/gp1/int" className={style.generalLinkIntr} >Introduction</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                1
            </p>
            <Link href="/education/gp1/frame" className={style.generalLink}>Frames, units, and measurement</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                2
            </p>
            <Link href="/education/gp1/vec" className={style.generalLink}>Vector review</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                3
            </p>
            <Link href="/education/gp1/calc" className={style.generalLink}>Calc review</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                4
            </p>
            <Link href="/education/gp1/ideal" className={style.generalLink}>Idealized models</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                5
            </p>
            <Link href="/education/gp1/1dm" className={style.generalLink}>Point particles in 1 Dimension</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                6
            </p>
            <Link href="/education/gp1/23dm" className={style.generalLink}>Point particles in 2 and 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/exam/exam1" className={style.testLink}>Test 1</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                7
            </p>
            <Link href="/education/gp1/diff" className={style.generalLink}>Differential equations crash course</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                8
            </p>
            <Link href="/education/gp1/nl" className={style.generalLink}>Newton&apos;s Laws of Motion</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                9
            </p>
            <Link href="/education/gp1/applnl" className={style.generalLink}>Applying Newton&apos;s Laws</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                10
            </p>
            <Link href="/education/gp1/wke" className={style.generalLink}>Work and Kinetic Energy</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                11
            </p>
            <Link href="/education/gp1/pu" className={style.generalLink}>Potential Energy &#38; Energy Conservation</Link><br></br>
            <br></br>
            <Link href="/education/gp1/exam/exam2" className={style.testLink}>Test 2</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                12
            </p>
            <Link href="/education/gp1/pmv" className={style.generalLink}>Momentum, Impulse, Collisions</Link><br></br>
            <br></br>  
            <p className={style.numberLink}>
                13
            </p>
            <Link href="/education/gp1/rm" className={style.generalLink}>Extended objects and rotational motion</Link><br></br>
            <br></br>   
            <p className={style.numberLink}>
                14
            </p>
            <Link href="/education/gp1/trq" className={style.generalLink}>Dynamics of Rotational Motion</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                15
            </p>
            <Link href="/education/gp1/eq" className={style.generalLink}>Equilibrium and Elasticity</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                16
            </p>
            <Link href="/education/gp1/taylor" className={style.generalLink}>Math detour - Taylor Expansion</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                17
            </p>
            <Link href="/education/gp1/g" className={style.generalLink}>Gravity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/exam/exam3" className={style.testLink}>Test 3</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                18
            </p>
            <Link href="/education/gp1/fluid" className={style.generalLink}>Fluids</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                19
            </p>
            <Link href="/education/gp1/osc" className={style.generalLink}>Oscillations</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                20
            </p>
            <Link href="/education/gp1/wm" className={style.generalLink}>Wave Motion</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                21
            </p>
            <Link href="/education/gp1/theat" className={style.generalLink}>Temperature, Heat, First law of thermodynamics</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                22
            </p>
            <Link href="/education/gp1/gas" className={style.generalLink}>Gases</Link><br></br>
            <br></br>
            <p className={style.numberLink}>
                23
            </p>
            <Link href="/education/gp1/slaw" className={style.generalLink}>Second Law of Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/gp1/exam/exam4" className={style.testLink}>Test 4</Link><br></br>
            <br></br>
            <Link href="/education/gp1/sum" className={style.generalLinkSumm}>Summary</Link><br></br>
            <br></br>
            <Link href="/education/gp1/exam/final" className={style.testLink}>Final exam</Link><br></br>
            <br />
            <br /> 
            <Helpful />
            <br />
            <br />
        </>
    );
}

export default Gp1;
