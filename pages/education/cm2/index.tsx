import Link from 'next/link';
import style from '@/styles/general.module.css';

const Cm2 = () => {
    return (
        <>
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Classical Mechanics 2
            </h1>
            <Link href="/education/cm2/cvar" className={style.generalLink}>Math background</Link><br></br>
            <br></br>
            <Link href="/education/cm2/leq" className={style.generalLink}>Lagrange&apos;s Equations</Link><br></br>
            <br></br>
            <Link href="/education/cm2/fnet" className={style.generalLink}>Central Force Problem</Link><br></br>
            <br></br>
            <Link href="/education/cm2/rbod" className={style.generalLink}>Rigid Body Motion</Link><br></br>
            <br></br>
            <Link href="/education/cm2/ham" className={style.generalLink}>Hamiltonian Mechanics</Link><br></br>
            <br></br>
            <Link href="/education/cm2/pert" className={style.generalLink}>Perturbation Theory</Link><br></br>
        </>
    );
}

export default Cm2;