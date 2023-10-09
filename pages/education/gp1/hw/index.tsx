import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Homework
            </h1>
            <p>
                Below you will find the homeworks to the class. 
                You will be able to submit them online.
            </p>
            <br />
            <Link href="/education/gp1/frame/hw" className={style.lightGreenLink}>Frames, units, and measurement</Link><br></br>
            <br></br>
            <Link href="/education/gp1/vec/hw" className={style.lightGreenLink}>Vector review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/calc/hw" className={style.lightGreenLink}>Calc review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/ideal/hw" className={style.lightGreenLink}>Idealized models</Link><br></br>
            <br></br>
            <Link href="/education/gp1/1dm/hw" className={style.lightGreenLink}>Point particles in 1 Dimension</Link><br></br>
            <br></br>
            <Link href="/education/gp1/23dm/hw" className={style.lightGreenLink}>Point particles in 2 and 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/diff/hw" className={style.lightGreenLink}>Differential equations crash course</Link><br></br>
            <br></br>
            <Link href="/education/gp1/nl/hw" className={style.lightGreenLink}>Newton&apos;s Laws of Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/applnl/hw" className={style.lightGreenLink}>Applying Newton&apos;s Laws</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wke/hw" className={style.lightGreenLink}>Work and Kinetic Energy</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pu/hw" className={style.lightGreenLink}>Potential Energy &#38; Energy Conservation</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pmv/hw" className={style.lightGreenLink}>Momentum, Impulse, Collisions</Link><br></br>
            <br></br>  
            <Link href="/education/gp1/rm/hw" className={style.lightGreenLink}>Extended objects and rotational motion</Link><br></br>
            <br></br>   
            <Link href="/education/gp1/trq/hw" className={style.lightGreenLink}>Dynamics of Rotational Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/eq/hw" className={style.lightGreenLink}>Equilibrium and Elasticity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/taylor/hw" className={style.lightGreenLink}>Math detour - Taylor Expansion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/g/hw" className={style.lightGreenLink}>Gravity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/fluid/hw" className={style.lightGreenLink}>Fluids</Link><br></br>
            <br></br>
            <Link href="/education/gp1/osc/hw" className={style.lightGreenLink}>Oscillations</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wm/hw" className={style.lightGreenLink}>Wave Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/theat/hw" className={style.lightGreenLink}>Temperature and Heat</Link><br></br>
            <br></br>
            <Link href="/education/gp1/gas/hw" className={style.lightGreenLink}>Gases</Link><br></br>
            <br></br>
            <Link href="/education/gp1/flaw/hw" className={style.lightGreenLink}>First Law of Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/gp1/slaw/hw" className={style.lightGreenLink}>Second Law of Thermodynamics</Link><br></br>
            <br></br>
        </>
    );
}

export default Hw;