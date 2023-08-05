import Link from 'next/link';
import style from '@/styles/general.module.css';


const Qm2 = () => {
    return (
        <>
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Quantum Mechanics 2
            </h1>
            <br></br>
            <br></br>
            <Link href="/education/qm2/q3d" className={style.generalLink}>Quantum in 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/qm2/h" className={style.generalLink}>Hydrogen Atom</Link><br></br>
            <br></br>
            <Link href="/education/qm2/pt" className={style.generalLink}>Perturbation Theory</Link><br></br>
            <br></br>
            <Link href="/education/qm2/ph" className={style.generalLink}>Perturbation of Hydrogen</Link><br></br>
            <br></br>
            <Link href="/education/qm2/tdp" className={style.generalLink}>Time Dependent Perturbation Theory</Link><br></br>
            <br></br>
            <Link href="/education/qm2/wkb" className={style.generalLink}>WKB Approximation</Link><br></br>
            <br></br>
            <Link href="/education/qm2/sc" className={style.generalLink}>Scattering</Link><br></br>
            <br></br>
            <Link href="/education/qm2/ma" className={style.generalLink}>Modern Applications</Link><br></br>
        </>
    );
}

export default Qm2;