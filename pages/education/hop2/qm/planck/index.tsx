import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Planck = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Planck
         </h1> 
        </>  
     ); 
 } 
  
 export default Planck; 
