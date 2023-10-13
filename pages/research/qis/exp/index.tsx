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
            <div className={style.flexContainer} id="intro">
                <Link href="/research/qis/exp#basics" className={style.yellowLink}>Basics</Link>
                <Link href="/research/qis/exp#equip" className={style.yellowLink}>Equipment</Link>
                <Link href="/research/qis/exp#energy" className={style.yellowLink}>Energy levels</Link>  
                <Link href="/research/qis/exp#current" className={style.yellowLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
                <p>
                    Basics of quantum info experiment...
                </p>
            <h2 id="equip">
                Equipment
            </h2>
                <p>
                    Equipment used in quantum info experiment...
                </p>
            <h2 id="energy">
                Energy
            </h2>
                <p>
                    Energy levels in quantum info experiment...
                </p>
            <h2 id="current">
                Current experiments
            </h2>
                <p>
                    Below you will find some experiments in Quantum information. 
                </p>
                <ul> 
                    <li>
                        <Link href="http://schoi.mit.edu/research">Information preservation and loss</Link>
                    </li>
                </ul>
        </>
    );
}

export default Exp;
