import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Feyn = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Feynman
         </h1> 
        </>  
     ); 
 } 
  
 export default Feyn; 
