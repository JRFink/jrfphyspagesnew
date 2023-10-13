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
            <div className={style.flexContainer} id="intro">
                <Link href="/research/cm/exp#basics" className={style.yellowLink}>Basics</Link>
                <Link href="/research/cm/exp#equip" className={style.yellowLink}>Equipment</Link>
                <Link href="/research/cm/exp#energy" className={style.yellowLink}>Energy levels</Link>  
                <Link href="/research/cm/exp#current" className={style.yellowLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
                <p>
                    Basics of condensed matter experiment...
                </p>
            <h2 id="equip">
                Equipment
            </h2>
                <p>
                    Equipment used in condensed matter experiment...
                </p>
            <h2 id="energy">
                Energy
            </h2>
                <p>
                    Energy levels in condensed matter experiment...
                </p>
            <h2 id="current">
                Current experiments
            </h2>
            <p>
                Below you will find some experiments in condensed matter. 
            </p>
            <ul>
                 <li>
                    <Link href="https://www.nature.com/articles/s41586-021-03915-3">Superconductors</Link>
                </li>
            </ul>
            
        </>
    );
}

export default Exp;
