import Link from 'next/link';
import style from '@/styles/general.module.css';

const Research = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Research
            </h1>
            <br></br>
            <br></br>
            <div className={style.flexContainer}>
                <Link href="/research/particle" className={style.generalLink}>Particle physics</Link><br></br>
                <Link href="/research/nuc" className={style.generalLink}>Nuclear</Link><br></br>
                <Link href="/research/amo" className={style.generalLink}>Atomic, Molecular, & Optical</Link><br></br>
                <Link href="/research/qis" className={style.generalLink}>Quantum Information & Quantum Computing</Link><br></br>
                <Link href="/research/cm" className={style.generalLink}>Condensed Matter</Link><br></br>
                <Link href="/research/bio" className={style.generalLink}>Biophysics</Link><br></br>
                <Link href="/research/astr" className={style.generalLink}>Astrophysics</Link><br></br>
                <Link href="/research/per" className={style.generalLink}>Physics Education & Research</Link><br></br>
            </div>
        </>
    );
}

export default Research;