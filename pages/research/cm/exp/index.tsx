import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/cm" className={style.backtoLink}>Condensed matter</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Condensed matter experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in Condensed matter. 
            </p>
            <ul>
                 <li><Link href="
http://ab-initio.mit.edu/~zwang/ces/chiral_edge_state.html">One way wave guides</Link></li>
            </ul>
            
        </>
    );
}

export default Exp;
