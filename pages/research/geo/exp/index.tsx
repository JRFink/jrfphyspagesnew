import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/geo" className={style.backtoLink}>Geophysics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Geophysics experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in AMO physics. 
            </p>
            
        </>
    );
}

export default Exp;
