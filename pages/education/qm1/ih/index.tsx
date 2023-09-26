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
            $$\begin{equation} \label{eq1}
            e=mc^2 
            \end{equation}$$
            <div className={style.equationBox}>
                {/* <div className={style.equation}>i &#8463;</div>
                <div className={style.equationNumber}>&#40;1&#41;</div> */}
            </div>
            <br /> 
            <br />
            <IhEx />
            <Helpful />
        </>
    );
}

export default Ih;