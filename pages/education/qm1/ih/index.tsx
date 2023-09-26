import Link from 'next/link';
import style from '@/styles/general.module.css';
import IhEx from '@/pages/exercises/qm1/ihex';
import Helpful from '@/pages/components/helpful';


const Ih = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Schrodinger Equation 
            </h1>
            <h3 className={style.h3num}>
                Domain
            </h3>
            <p>
                ...
            </p>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}> i &#8463; &#8706; <b>&#936;</b>  / &#8706; t  = &#94;H <b>&#936;</b>  </div>
                <div className={style.equationNumber}> &#40;1&#41; </div>
          
            </div>
            <br /> 
            <br />
            <IhEx />
            <Helpful />
        </>
    );
}

export default Ih;