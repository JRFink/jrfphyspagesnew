import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <br />
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Homework
            </h1>
            <br />
            <br />
            <Link href="/education/qm1/gerlach/hw" className={style.lightGreenLink}>From Experiment to Theory - Stern Gerlach</Link><br></br>
            <br></br>
            <Link href="/education/qm1/op/hw" className={style.lightGreenLink}>Linear algebra crash course</Link><br></br>
            <br></br>
            <Link href="/education/qm1/dxdp/hw" className={style.lightGreenLink}>Measurement and Uncertainty</Link><br></br>
            <br></br>
            <Link href="/education/qm1/ih/hw" className={style.lightGreenLink}>Schrodinger Equation</Link><br></br>
            <br></br>
            <Link href="/education/qm1/box/hw" className={style.lightGreenLink}>Particle in a Box</Link><br></br>
            <br></br>
            <Link href="/education/qm1/jls/hw" className={style.lightGreenLink}>Angular Momentum</Link><br></br>
            <br></br>
            <Link href="/education/qm1/ho/hw" className={style.lightGreenLink}>Harmonic Oscillator</Link><br></br>
        </>
    );
}

export default Hw;