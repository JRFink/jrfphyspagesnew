import Link from 'next/link';
import style from '@/styles/general.module.css';


const Cm1 = () => {
    return (
        <>
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Classical Mechanics 1
            </h1>
                <Link href="/education/cm1/over" className={style.generalLink}>Overview of classical mechanics</Link><br></br>
                <br></br>
                <Link href="/education/cm1/nlaw" className={style.generalLink}>Newton&apos;s Laws</Link><br></br>
                <br></br>
                <Link href="/education/cm1/proj" className={style.generalLink}>Projectiles</Link><br></br>
                <br></br>
                <Link href="/education/cm1/angmom" className={style.generalLink}>Momentum and Angular Momentum</Link><br></br>
                <br></br>
                <Link href="/education/cm1/energ" className={style.generalLink}>Energy</Link><br></br>
                <br></br>
                <Link href="/education/cm1/osc" className={style.generalLink}>Oscillations</Link><br></br>
        </>
    );
}

export default Cm1;