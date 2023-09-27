import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/bio" className={style.backtoLink}>Biophys</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Biophysics experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in biophysics. 
            </p>
            
        </>
    );
}

export default Exp;
