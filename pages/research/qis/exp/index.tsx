import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/qis" className={style.backtoLink}>Quantum info</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Quantum info experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in Quantum information. 
            </p>
            
        </>
    );
}

export default Exp;
