import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link>
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in introductory modern physics. 
            </p>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}> i &#8463; &#8706; <b>&#936;</b>  / &#8706; t  = &#94;H <b>&#936;</b>  </div>
                <div className={style.equationNumber}> &#40;1&#41; </div>
            </div>
        </>
    );
}

export default Equat;