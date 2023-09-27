import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Nuclear experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in nuclear physics. 
            </p>
            
        </>
    );
}

export default Exp;
