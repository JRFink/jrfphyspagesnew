import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Dalt = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Dalton&#39;s atom
         </h1> 
        </>  
     ); 
 } 
  
 export default Dalt; 
