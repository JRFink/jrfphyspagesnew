import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Homework
            </h1>
            <Link href="/education/gp2/ac/hw/1" className={style.lightGreenLink}>AC circuits</Link>
            <br />
            <br />
            <Link href="/education/gp2/b/hw/1" className={style.lightGreenLink}>Magnetic field and force</Link>
            <br />
            <br />
            <Link href="/education/gp2/cap/hw/1" className={style.lightGreenLink}>Electrostatic energy and capacitors</Link>
            <br />
            <br />
            <Link href="/education/gp2/dc/hw/1" className={style.lightGreenLink}>DC circuits</Link>
            <br />
            <br />
            <Link href="/education/gp2/eb/hw/1" className={style.lightGreenLink}>Electromagnetic waves</Link>
            <br />
            <br />
            <Link href="/education/gp2/elec/hw/1" className={style.lightGreenLink}>Electric chage, force, and field</Link>
            <br />
            <br />
            <Link href="/education/gp2/emf/hw/1" className={style.lightGreenLink}>Electromagnetic induction</Link>
            <br />
            <br />
            <Link href="/education/gp2/gauss/hw/1" className={style.lightGreenLink}>Gauss&#39; law</Link>
            <br />
            <br />
            <Link href="/education/gp2/i/hw/1" className={style.lightGreenLink}>Electric currents</Link>
            <br />
            <br />
            <Link href="/education/gp2/max/hw/1" className={style.lightGreenLink}>Maxwell&#39;s equations</Link>
            <br />
            
        </>
    );
}

export default Hw;