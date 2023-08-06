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
                Eventually you will be able to take gen phys 1 here. Have a look at our <Link href="/education/gp1/pdf/syllabus.pdf" className={style.sampleLink}>sample syllabus</Link>.
            </p>
            <br></br>
            <br></br>
            <Link href="/education/gp1/uv" className={style.generalLink}>Units, Coordinates, Vectors</Link><br></br>
            <br></br>
            <Link href="/education/gp1/1dm" className={style.generalLink}>Motion in 1 Dimension</Link><br></br>
            <br></br>
            <Link href="/education/gp1/23dm" className={style.generalLink}>Motion in 2 and 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/gp1/nl" className={style.generalLink}>Newton&apos;s Laws of Motion</Link><br></br>
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
            <Link href="/education/gp1/taylor" className={style.generalLink}>Math detour - Taylor Expansion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/g" className={style.generalLink}>Gravity</Link><br></br>
            <br></br>
            <Link href="/education/gp1/eq" className={style.generalLink}>Equilibrium</Link><br></br>
            <br></br>
            <Link href="/education/gp1/wm" className={style.generalLink}>Wave Motion</Link><br></br>
            <br></br>
            <Link href="/education/gp1/fluid" className={style.generalLink}>Fluids</Link><br></br>
            <br></br>
            <Link href="/education/gp1/theat" className={style.generalLink}>Temperature and Heat</Link><br></br>
            <br></br>
            <Link href="/education/gp1/kin" className={style.generalLink}>Kinetic Theory of Gases</Link><br></br>
            <br></br>
            <Link href="/education/gp1/flaw" className={style.generalLink}>First Law of Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/gp1/slaw" className={style.generalLink}>Second Law of Thermodynamics</Link><br></br>
            <br></br>
        </>
    );
}

export default Gp1;