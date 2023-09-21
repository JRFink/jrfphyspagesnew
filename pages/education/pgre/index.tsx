import Link from 'next/link';
import style from '@/styles/general.module.css'; 
  
 const Pgre = () => {  
   return (  
      <>  
         <h1 className={style.centerText}> 
              Physics GRE &#174; prep 
         </h1> 
 <p> 
      This page will help you prepare for the <Link href="/pdf/fact-sheet-physics.pdf">physics gre</Link>. 
 </p> 
      <p>    
      The test covers the following topics...
      </p>
             <br></br> 
             <p className={style.numberLink}> 
                 1 
             </p> 
             <Link href="/education/pgre/cm" className={style.generalLink}>Classical mechanics</Link><br></br>
            <br></br> 
             <p className={style.numberLink}> 
                 2 
             </p> 
             <Link href="/education/pgre/em" className={style.generalLink}>Electromagnetism</Link><br></br>
            <br></br> 
             <p className={style.numberLink}> 
                 3 
             </p> 
             <Link href="/education/pgre/op" className={style.generalLink}>Optics amd waves</Link><br></br>
            <br></br> 
             <p className={style.numberLink}> 
                 4 
             </p> 
             <Link href="/education/pgre/therm" className={style.generalLink}>Thermodynamics &#38; stat mech</Link><br></br>
            <br></br> 
             <p className={style.numberLink}> 
                 5
             </p> 
             <Link href="/education/pgre/quant" className={style.generalLink}>Quantum mechanics</Link><br></br>
            <br></br> 
             <p className={style.numberLink}> 
                 6
             </p> 
             <Link href="/education/pgre/atom" className={style.generalLink}>Atomic physics</Link><br></br>
            <br></br> 
             <p className={style.numberLink}> 
                 7 
             </p> 
             <Link href="/education/pgre/rel" className={style.generalLink}>Special relativity</Link><br />
            <br></br> 
             <p className={style.numberLink}> 
                 8 
             </p> 
             <Link href="/education/pgre/lab" className={style.generalLink}>Lab methods</Link><br></br>        
            <br></br> 
             <p className={style.numberLink}> 
                 9
             </p> 
             <Link href="/education/pgre/spec" className={style.generalLink}>Special topics</Link><br></br>      
      </> 
   );   
 } 
  
 export default Pgre; 
