import Link from 'next/link';
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br /> 
            <Link href="/education/qm1" className={style.backtoLink}>Quantum</Link>
            <h1 className={style.centerText}>
                Equations for Quantum 1
            </h1>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}> i &#8463; &#8706; &#936; / &#8706; t  = &#94;H &#936; </div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#123; x, p &#125; = i &#8463; </div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#8710;x&#8710;p = &#8463; / 2 </div>
            </div>
        </>
    );
}

export default Equat