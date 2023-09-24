import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Schrod = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Schrodinger&#39;s equation
         </h1> 
        </>  
     ); 
 } 
  
 export default Schrod; 
