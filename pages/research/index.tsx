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
            <Link href="/research/news" className={style.yellowLink}>News</Link>
            <br />
            <br />
            <div className={style.flexContainer}>
                <Link href="/research/particle" className={style.generalLink}>Particle physics</Link><br></br>
                <Link href="/research/nuc" className={style.generalLink}>Nuclear</Link><br></br>
                <Link href="/research/amo" className={style.generalLink}>Atomic, Molecular, & Optical</Link><br></br>
                <Link href="/research/qis" className={style.generalLink}>Quantum Information & Computing</Link><br></br>
                <Link href="/research/cm" className={style.generalLink}>Condensed Matter</Link><br></br>
                <Link href="/research/bio" className={style.generalLink}>Biophysics</Link><br></br>
                <Link href="/research/geo" className={style.generalLink}>Geophysics</Link><br></br>
                <Link href="/research/astr" className={style.generalLink}>Astrophysics</Link><br></br>
                <Link href="/research/per" className={style.generalLink}>Physics education research</Link><br></br>
                <Link href="/research/problems" className={style.generalLink}>Problems</Link>  
                <Link href="/research/stand" className={style.generalLink}>Standards and constants</Link><br></br>
            </div>
<br />
        </>
    );
}

export default Research;
