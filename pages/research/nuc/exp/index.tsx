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
            <div className={style.flexContainer} id="intro">
                <Link href="/research/nuc/exp#basics" className={style.yellowLink}>Basics</Link>
                <Link href="/research/nuc/exp#equip" className={style.yellowLink}>Equipment</Link>
                <Link href="/research/nuc/exp#energy" className={style.yellowLink}>Energy levels</Link>  
                <Link href="/research/nuc/exp#current" className={style.yellowLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
                <p>
                    Basics of nuclear experiment...
                </p>
            <h2 id="equip">
                Equipment
            </h2>
                <p>
                    Equipment used in nuclear experiment...
                </p>
            <h2 id="energy">
                Energy
            </h2>
                <p>
                    Energy levels in nuclear experiment...
                </p>
            <h2 id="current">
                Current experiments
            </h2>
                <p>
                    Below you will find some experiments in nuclear physics. 
                    <ul>
                        <li>
                            <Link href="http://web.mit.edu/lns/research/hig.html">Quark gluon plasma</Link>
                        </li>
                    </ul>
                        Also the division in the <Link href="https://science.osti.gov/np/Research">Department of energy</Link> 
                        will keep you busy.
                </p>
        </>
    );
}

export default Exp;
