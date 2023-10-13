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
            <div className={style.flexContainer} id="intro">
                <Link href="/research/geo/exp#basics" className={style.yellowLink}>Basics</Link>
                <Link href="/research/geo/exp#equip" className={style.yellowLink}>Equipment</Link>
                <Link href="/research/geo/exp#energy" className={style.yellowLink}>Energy levels</Link>  
                <Link href="/research/geo/exp#current" className={style.yellowLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
                <p>
                    Basics of geophysics experiment...
                </p>
            <h2 id="equip">
                Equipment
            </h2>
                <p>
                    Equipment used in geophysics experiment...
                </p>
            <h2 id="energy">
                Energy
            </h2>
                <p>
                    Energy levels in geophysics experiment...
                </p>
            <h2 id="current">
                Current experiments
            </h2>
                <p>
                    Current experiments in geophys...
                </p>
            
        </>
    );
}

export default Exp;
