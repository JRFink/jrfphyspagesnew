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
            
                <ul>
                    <li><Link href="http://web.mit.edu/lns/research/hig.html">Quark gluon plasma</Link></li>
                </ul>
                Also the division in the <Link href="https://science.osti.gov/np/Research">Department of energy</Link> highlights current experiments.
            </p>
        </>
    );
}

export default Exp;
