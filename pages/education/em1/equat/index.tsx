import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/education/em1" className={style.backtoLink}>E and m 1</Link>
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in electricity and magnetism 1. 
            </p>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}><b>E</b> = q / 4 &#960; &#949;<span><sub>0</sub></span> 
                        r <span><sup>2</sup></span> &nbsp; <b>&#120111;</b> </div>
                    <div className={style.equationNumber}>&#40;1&#41;</div>
                </div>
        </>
    );
}

export default Equat;