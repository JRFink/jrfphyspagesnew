import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Heis = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Heisenberg&#39;s uncertainty principle
         </h1> 
        </>  
     ); 
 } 
  
 export default Heis; 
