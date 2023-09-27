import Link from 'next/link';
import style from '@/styles/general.module.css';
import SecondEx from '@/pages/exercises/therm/2ndex';
import Helpful from '@/pages/components/helpful';

const Second = () => {
    return (
        <>
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                The Second Law 
            </h1>
            <p> 
                 The second law is the statement that  
             </p> 
             <br /> 
                  <div className={style.equationBox}>  
                      <div className={style.equation}>S = k Ln &#937;</div>  
                      <div className={style.equationNumber}>&#40;1&#41;</div>  
                  </div>  
                  <br />
            <SecondEx />
            <Helpful />
        </>
    );
}

export default Second;