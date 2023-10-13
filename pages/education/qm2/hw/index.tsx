import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Homework
            </h1>
            <Link href="/education/qm2/q3d/hw/1" className={style.lightGreenLink}>Quantum in 3d</Link>
            <br />
            <Link href="/education/qm2/h/hw/1" className={style.lightGreenLink}>Hydrogen atom</Link>
            <br />
            <Link href="/education/qm2/pt/hw/1" className={style.lightGreenLink}>Perturbation theory</Link>
            <br />
            <Link href="/education/qm2/ph/hw/1" className={style.lightGreenLink}>Perturbation of hydrogen</Link>
            <br />
            <Link href="/education/qm2/tdp/hw/1" className={style.lightGreenLink}>Time dependent perturbation theory</Link>
            <br />
            <Link href="/education/qm2/wkb/hw/1" className={style.lightGreenLink}>Wkb approximation</Link>
            <br />
            <Link href="/education/qm2/sc/hw/1" className={style.lightGreenLink}>Scattering</Link>
            <br />
            <Link href="/education/qm2/ma/hw/1" className={style.lightGreenLink}>Modern applications</Link>
            <br />
        </>
    );
}

export default Hw;