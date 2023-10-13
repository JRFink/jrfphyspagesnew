import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/bio" className={style.backtoLink}>Biophys</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Biophysics experiment
            </h1>
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/research/bio/exp#basics" className={style.yellowLink}>Basics</Link>
                <Link href="/research/bio/exp#equip" className={style.yellowLink}>Equipment</Link>
                <Link href="/research/bio/exp#energy" className={style.yellowLink}>Energy levels</Link>  
                <Link href="/research/bio/exp#current" className={style.yellowLink}>Current experiments</Link>
            </div>
            <h2 id="basics">
                Basics
            </h2>
                <p>
                    Basics of astrophysics experiment...
                </p>
            <h2 id="equip">
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
                    Below you will find some experiments in biophysics. 
                </p>
        </>
    );
}

export default Exp;
