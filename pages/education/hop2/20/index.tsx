import Link from 'next/link'
import style from '@/styles/general.module.css';

const Twent = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Development through 20th century
        </h1>
<h2 className={style.numberLink}> 
                 6.1 
             </h2> 
             <Link href="/education/hop2/20/feyn" className={style.generalLink}> 
                 Feynman 
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 6.2 
             </h2> 
             <Link href="/education/hop2/20/cold" className={style.generalLink}> 
                 Cold war 
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 6.3 
             </h2> 
             <Link href="/education/hop2/20/wein" className={style.generalLink}> 
                 Weinberg
             </Link> 
             <br />  
             <h2 className={style.numberLink}> 
                 6.4 
             </h2> 
             <Link href="/education/hop2/20/dirac" className={style.generalLink}> 
                 Dirac&#39;s equation 
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 6.5 
             </h2> 
             <Link href="/education/hop2/20/cern" className={style.generalLink}> 
                 Cern
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 6.6 
             </h2> 
             <Link href="/education/hop2/20/quant" className={style.generalLink}> 
                Quantum encryption
             </Link> 
             <br />  
       </> 
    );
}

export default Twent; 