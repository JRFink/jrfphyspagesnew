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
            <div className={style.flexContainer} id="intro">
                <Link href="/research/astr/exp#basics" className={style.generalLink}>Basics</Link>
                <Link href="/research/astr/exp#equip" className={style.generalLink}>Equipment</Link>
                <Link href="/research/astr/exp#energy" className={style.generalLink}>Energy levels</Link>  
                <Link href="/research/astr/exp#current" className={style.generalLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
            <p>
                Basics of astrophysics experiment...
            </p>
            <h2 id="equipment">
                Equipment
            </h2>
            <p>
                Equipment used in astrophysics experiment...
            </p>
            <h2 id="energy">
                Energy
            </h2>
                <p>
                    Energy levels in astrophysics experiment...
                </p>
            <h2 id="current">
                Current experiments
            </h2>
                <p>
                    Below you will find some experiments in astrophysics. 
                </p>
                <ul> 
                    <li>
                        <Link href="https://www.ligo.caltech.edu/">Gravitational waves - Ligo</Link>
                    </li>
                </ul>
        </>
    );
}

export default Exp;