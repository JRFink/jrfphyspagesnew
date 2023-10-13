import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                AMO experiment
            </h1>
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/research/amo/exp#basics" className={style.generalLink}>Basics</Link>
                <Link href="/research/amo/exp#equip" className={style.generalLink}>Equipment</Link>
                <Link href="/research/amo/exp#energy" className={style.generalLink}>Energy levels</Link>  
                <Link href="/research/amo/exp#current" className={style.generalLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
            <p>
                Basics of amo experiment...
            </p>
            <h2 id="equipment">
                Equipment
            </h2>
            <p>
                Equipment used in AMO experiment...
            </p>
            <h2 id="energy">
                Energy
            </h2>
                <p>
                    Energy levels in AMO experiment...
                </p>
            <h2 id="current">
                Current experiments
            </h2>
                <p>
                    Below you will find some experiments in AMO physics. 
                </p>
                <ul> 
                    <li><Link href="https://jila.colorado.edu/cornell-group/research/edm-molecular-ions">shape of the electron</Link> - boulder - cornell </li>
                    <br />
                    <li><Link href="https://www.science.org/doi/10.1126/science.abi9917">optical tweezers</Link> - lukin </li>
                </ul>          
        </>
    );
}

export default Exp;