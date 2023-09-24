import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Ruth = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Rutherford&#39;s gold foil
         </h1> 
        </>  
     ); 
 } 
  
 export default Ruth; 
