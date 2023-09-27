import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/astr" className={style.backtoLink}>Astrophysics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Astrophysics experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in astrophysics. 
            </p>
            
        </>
    );
}

export default Exp;