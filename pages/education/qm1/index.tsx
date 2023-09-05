import Link from 'next/link';
import style from '@/styles/general.module.css';
import IhVid from '@/public/videos/qm1/ihvid';


const Qm1 = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Quantum Mechanics 1
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/qm1/vid" className={style.styleCourseNav}>Videos</Link>
                <Link href="" className={style.styleCourseNav}>Course notes coming</Link>
                <Link href="" className={style.styleCourseNav}>Quizzes coming</Link>  
            </div>
            <br></br>
            <br></br>
            <IhVid />
            <br></br>
            <br></br>
            <Link href="/education/qm1/gerlach" className={style.generalLink}>From Experiment to Theory - Stern Gerlach</Link><br></br>
            <br></br>
            <Link href="/education/qm1/op" className={style.generalLink}>Math Background</Link><br></br>
            <br></br>
            <Link href="/education/qm1/dxdp" className={style.generalLink}>Measurement and Uncertainty</Link><br></br>
            <br></br>
            <Link href="/education/qm1/ih" className={style.generalLink}>Schrodinger Equation</Link><br></br>
            <br></br>
            <Link href="/education/qm1/box" className={style.generalLink}>Particle in a Box</Link><br></br>
            <br></br>
            <Link href="/education/qm1/jls" className={style.generalLink}>Angular Momentum</Link><br></br>
            <br></br>
            <Link href="/education/qm1/ho" className={style.generalLink}>Harmonic Oscillator</Link><br></br>
        </>
    );
}

export default Qm1;