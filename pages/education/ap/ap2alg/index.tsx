import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ap2alg = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP classes</Link>
        <h1 className={style.centerText}> 
           AP Physics 2 - algebra  
        </h1>
        <br /> 
<p> 
The current structure of the class consists of seven units&#59; they are:
</p> 


            <br />  
              <p className={style.numberLink}>  
                  1 
              </p>  
              <Link href="/education/ap/ap2alg/fluid" className={style.generalLink}>Fluids: pressure and forces</Link><br></br>  
              <br />   
               <p className={style.numberLink}>   
                   2  
               </p>   
               <Link href="/education/ap/ap2alg/therm" className={style.generalLink}>Thermodynamics</Link><br></br>                 
               <br />   
               <p className={style.numberLink}>   
                   3 
               </p>   
               <Link href="/education/ap/ap2alg/elec" className={style.generalLink}>Electric force, field &#38; potential</Link><br></br>   
               <br />   
               <p className={style.numberLink}>  
                   4  
               </p>   
               <Link href="/education/ap/ap2alg/circ" className={style.generalLink}>Electric circuits</Link><br></br>   
               <br />   
               <p className={style.numberLink}>  
                   5 
               </p>   
               <Link href="/education/ap/ap2alg/mag" className={style.generalLink}>Magnetism and electromagnetic induction</Link><br></br>   
               <br />    
               <p className={style.numberLink}>  
                   6 
               </p>   
               <Link href="/education/ap/ap2alg/geo" className={style.generalLink}>Geometric and physical objects</Link><br></br>   
               <br />     
               <p className={style.numberLink}>  
                   7  
               </p>   
               <Link href="/education/ap/ap2alg/quant" className={style.generalLink}>Quantum, atomic, and nuclear physics</Link><br></br>   
               <br /> 
               <p>  
                    Find the curriculum  
                    <a href="https://apstudents.collegeboard.org/courses/ap-physics-2-algebra-based"> here</a>. 
               </p>  
      </> 
    ); 
 }  
  
 export default Ap2alg;
