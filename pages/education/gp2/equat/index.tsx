import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in gen phys 2. 
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