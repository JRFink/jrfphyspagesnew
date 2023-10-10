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
            <Link href="/education/gp1/frame/hw/1" className={style.lightGreenLink}>Frames, units, and measurement</Link><br></br>
            <br></br>
            <Link href="/education/gp1/vec/hw/1" className={style.lightGreenLink}>Vector review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/calc/hw/1" className={style.lightGreenLink}>Calc review</Link><br></br>
            <br></br>
            <Link href="/education/gp1/ideal/hw/1" className={style.lightGreenLink}>Idealized models</Link><br></br>
            <br></br>
            <Link href="/education/gp1/1dm/hw/1" className={style.lightGreenLink}>Point particles in 1 Dimension</Link><br></br>
            <br></br>
            <Link href="/education/gp1/23dm/hw/1" className={style.lightGreenLink}>Point particles in 2 and 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/diff/hw/1" className={style.lightGreenLink}>Differential equations crash course</Link><br></br>
            <br></br>
            <Link href="/education/gp1/nl/hw/1" className={style.lightGreenLink}>Newton&apos;s Laws of Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/applnl/hw/1" className={style.lightGreenLink}>Applying Newton&apos;s Laws</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wke/hw/1" className={style.lightGreenLink}>Work and Kinetic Energy</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pu/hw/1" className={style.lightGreenLink}>Potential Energy &#38; Energy Conservation</Link><br></br>
            <br></br>
            <Link href="/education/gp1/pmv/hw/1" className={style.lightGreenLink}>Momentum, Impulse, Collisions</Link><br></br>
            <br></br>  
            <Link href="/education/gp1/rm/hw/1" className={style.lightGreenLink}>Extended objects and rotational motion</Link><br></br>
            <br></br>   
            <Link href="/education/gp1/trq/hw/1" className={style.lightGreenLink}>Dynamics of Rotational Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/eq/hw/1" className={style.lightGreenLink}>Equilibrium and Elasticity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/taylor/hw/1" className={style.lightGreenLink}>Math detour - Taylor Expansion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/g/hw/1" className={style.lightGreenLink}>Gravity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/fluid/hw/1" className={style.lightGreenLink}>Fluids</Link><br></br>
            <br></br>
            <Link href="/education/gp1/osc/hw/1" className={style.lightGreenLink}>Oscillations</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wm/hw/1" className={style.lightGreenLink}>Wave Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/theat/hw/1" className={style.lightGreenLink}>Temperature and Heat</Link><br></br>
            <br></br>
            <Link href="/education/gp1/gas/hw/1" className={style.lightGreenLink}>Gases</Link><br></br>
            <br></br>
            <Link href="/education/gp1/flaw/hw/1" className={style.lightGreenLink}>First Law of Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/gp1/slaw/hw/1" className={style.lightGreenLink}>Second Law of Thermodynamics</Link><br></br>
            <br></br>
        </>
    );
}

export default Hw;