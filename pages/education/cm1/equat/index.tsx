import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/education/cm1" className={style.backtoLink}>Class mech 1</Link>
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in classical mechanics 1. 
            </p>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}> <b>F</b> = d<b>p</b> / dt  </div>
                <div className={style.equationNumber}> &#40;1&#41; </div>
            </div>
        </>
    );
}

export default Equat;