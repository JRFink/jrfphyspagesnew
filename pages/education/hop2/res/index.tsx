import Link from 'next/link'
import style from '@/styles/general.module.css';

const Res = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Modern research areas
        </h1>

<h2 className={style.numberLink}>  
                  7.1  
              </h2>  
              <Link href="/education/hop2/20/feyn" className={style.generalLink}>  
                  Particle 
              </Link>  
              <br />  
              <h2 className={style.numberLink}>  
                  7.2  
              </h2>  
              <Link href="/education/hop2/20/cold" className={style.generalLink}>  
                  Nuclear 
              </Link>  
              <br />  
              <h2 className={style.numberLink}>  
                  7.3  
              </h2>  
              <Link href="/education/hop2/20/wein" className={style.generalLink}>  
                  Quantum computing 
              </Link>  
              <br />   
              <h2 className={style.numberLink}>  
                  7.4  
              </h2>  
              <Link href="/education/hop2/20/dirac" className={style.generalLink}>  
                  
              </Link>  
              <br />  
              <h2 className={style.numberLink}>  
                  7.5  
              </h2>  
              <Link href="/education/hop2/20/cern" className={style.generalLink}>  
                   
              </Link>  
              <br />  
              <h2 className={style.numberLink}>  
                  7.6  
              </h2>  
              <Link href="/education/hop2/20/quant" className={style.generalLink}>  
                 
              </Link>
 <h2 className={style.numberLink}>  
                  7.7  
              </h2>  
              <Link href="/education/hop2/20/quant" className={style.generalLink}>  
                 
              </Link>
              <br />  
       </> 
    );
}

export default Res; 