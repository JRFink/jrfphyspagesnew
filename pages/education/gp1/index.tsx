import Link from 'next/link';
import style from '@/styles/general.module.css';


const Gp1 = () => {
    return (
        <>
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                General Physics 1
            </h1>
            
            <p>
                Hello, and welcome to gene phys 1! This class is meant to be awesome; 
                it is the equivalent of a gen phys 1 class you would take in high school or college. You will learn about 
                forces, motion, vectors, newton&#39;s laws, angular momentum, taylor expansion, and much more. I am offering it as an online class where you can work along at your own pace. I don&#39;t have all the implementation yet, but I have the topical structure. You can get started today. 
            </p>
            <h2>
                Description
            </h2>
            <p>
                This class is an introduction to general physics. It will cover the following topics: 
                <br></br>
                <br></br>
                &nbsp; &nbsp; kinematics, forces &#40;newton&#39;s laws&#41;, work, energy, rotational motion, taylor expansion, gravity, waves, fluid motion, and intro thermodynamics. 
                <br></br><br></br>
                The class consists of ~ 20 modules, which will consist of lecture videos, homework assignments, quizzes, exams, an extra credit paper, and a final exam.
                I hope you enjoy it, and please give me your <a href="mailto:jeff@jrfink.net">feedback</a> as you go through it.
                <br></br>
                <br></br>
          
            </p>
            <h2>
                Prerequisites
            </h2>
            <p>
                Algebra, geometry, trigonometry
            </p>
            <h2>
                Course number
            </h2>
            <p>
                Phys 101
            </p>
            <h2>
                Location
            </h2>
            <p>
                Asynchronous online
            </p>
            <h2>
                Instructor
            </h2>
            <p>
                Jeff Fink
            </p>
            <h2>
                Syllabus
            </h2>
            <p>
                    <Link href="/pdf/gp1syl.pdf" download>sample syllabus</Link>
                </p>
            <br></br>
            <br></br>
            <Link href="/education/gp1/int" className={style.generalLink}>Introduction</Link><br></br>
            <br></br>
            <Link href="/education/gp1/frame" className={style.generalLink}>Frames, units, and measurement</Link><br></br>
            <br></br>
            <Link href="/education/gp1/vec" className={style.generalLink}>Vector review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/calc" className={style.generalLink}>Big calc review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/1dm" className={style.generalLink}>Motion in 1 Dimension</Link><br></br>
            <br></br>
            <Link href="/education/gp1/23dm" className={style.generalLink}>Motion in 2 and 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/nl" className={style.generalLink}>Newton&apos;s Laws of Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/applnl" className={style.generalLink}>Applying Newton&apos;s Laws</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wke" className={style.generalLink}>Work and Kinetic Energy</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pu" className={style.generalLink}>Potential Energy and Energy Conservation</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pmv" className={style.generalLink}>Momentum, Impulse, Collisions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/rm" className={style.generalLink}>Rotational Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/trq" className={style.generalLink}>Dynamics of Rotational Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/eq" className={style.generalLink}>Equilibrium</Link><br></br>
            <br></br>
            <Link href="/education/gp1/taylor" className={style.generalLink}>Math detour - Taylor Expansion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/g" className={style.generalLink}>Gravity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/fluid" className={style.generalLink}>Fluids</Link><br></br>
            <br></br>
            <Link href="/education/gp1/osc" className={style.generalLink}>Oscillations</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wm" className={style.generalLink}>Wave Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/theat" className={style.generalLink}>Temperature and Heat</Link><br></br>
            <br></br>
            <Link href="/education/gp1/kin" className={style.generalLink}>Gases</Link><br></br>
            <br></br>
            <Link href="/education/gp1/flaw" className={style.generalLink}>First Law of Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/gp1/slaw" className={style.generalLink}>Second Law of Thermodynamics</Link><br></br>
            <br></br>
        </>
    );
}

export default Gp1;
