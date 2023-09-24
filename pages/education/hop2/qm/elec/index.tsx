import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Elec = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Thomson&#39;s electron
         </h1> 
        </>  
     ); 
 } 
  
 export default Elec; 
