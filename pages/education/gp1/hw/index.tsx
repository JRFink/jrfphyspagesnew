import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Homework
            </h1>
            <p>
                Below you will find the homeworks to the class. 
                You will be able to submit them online.
            </p>
            <br />
            <Link href="/education/gp1/frame" className={style.lightGreenLink}>Frames, units, and measurement</Link><br></br>
            <br></br>
            <Link href="/education/gp1/vec" className={style.lightGreenLink}>Vector review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/calc" className={style.lightGreenLink}>Calc review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/ideal" className={style.lightGreenLink}>Idealized models</Link><br></br>
            <br></br>
            <Link href="/education/gp1/1dm" className={style.lightGreenLink}>Point particles in 1 Dimension</Link><br></br>
            <br></br>
            <Link href="/education/gp1/23dm" className={style.lightGreenLink}>Point particles in 2 and 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/diff" className={style.lightGreenLink}>Differential equations crash course</Link><br></br>
            <br></br>
            <Link href="/education/gp1/nl" className={style.lightGreenLink}>Newton&apos;s Laws of Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/applnl" className={style.lightGreenLink}>Applying Newton&apos;s Laws</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wke" className={style.lightGreenLink}>Work and Kinetic Energy</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pu" className={style.lightGreenLink}>Potential Energy &#38; Energy Conservation</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pmv" className={style.lightGreenLink}>Momentum, Impulse, Collisions</Link><br></br>
            <br></br>  
            <Link href="/education/gp1/rm" className={style.lightGreenLink}>Extended objects and rotational Motion</Link><br></br>
            <br></br>   
            <Link href="/education/gp1/trq" className={style.lightGreenLink}>Dynamics of Rotational Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/eq" className={style.lightGreenLink}>Equilibrium and Elasticity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/taylor" className={style.lightGreenLink}>Math detour - Taylor Expansion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/g" className={style.lightGreenLink}>Gravity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/fluid" className={style.lightGreenLink}>Fluids</Link><br></br>
            <br></br>
            <Link href="/education/gp1/osc" className={style.lightGreenLink}>Oscillations</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wm" className={style.lightGreenLink}>Wave Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/theat" className={style.lightGreenLink}>Temperature and Heat</Link><br></br>
            <br></br>
            <Link href="/education/gp1/gas" className={style.lightGreenLink}>Gases</Link><br></br>
            <br></br>
            <Link href="/education/gp1/flaw" className={style.lightGreenLink}>First Law of Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/gp1/slaw" className={style.lightGreenLink}>Second Law of Thermodynamics</Link><br></br>
            <br></br>
        </>
    );
}

export default Hw;