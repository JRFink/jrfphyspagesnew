import Link from 'next/link';
import style from '@/styles/general.module.css';


const Gp2 = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                General Physics 2
            </h1>
            <br></br>
            <br></br>
            <Link href="/education/gp2/elec" className={style.generalLink}>Electric Charge, Force, and Field</Link><br></br>
            <br></br>
            <Link href="/education/gp2/gauss" className={style.generalLink}>Gauss&apos; Law</Link><br></br>
            <br></br>
            <Link href="/education/gp2/vq" className={style.generalLink}>Electric Potential</Link><br></br>
            <br></br>
            <Link href="/education/gp2/cap" className={style.generalLink}>Electrostatic Energy and Capacitors</Link><br></br>
            <br></br>
            <Link href="/education/gp2/i" className={style.generalLink}>Electric Current</Link><br></br>
            <br></br>
            <Link href="/education/gp2/dc" className={style.generalLink}>DC Circuits</Link><br></br>
            <br></br>
            <Link href="/education/gp2/b" className={style.generalLink}>Magnetic Field and Force</Link><br></br>
            <br></br>
            <Link href="/education/gp2/emf" className={style.generalLink}>Electromagnetic Induction</Link><br></br>
            <br></br>
            <Link href="/education/gp2/ac" className={style.generalLink}>AC Circuits</Link><br></br>
            <br></br>
            <Link href="/education/gp2/eb" className={style.generalLink}>Electromagnetic Waves</Link><br></br>
            <br></br>
            <Link href="/education/gp2/max" className={style.generalLink}>Maxwell&apos;s Equations</Link><br></br>
        </>
    );
}

export default Gp2;