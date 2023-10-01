import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Stuff = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                 Stuff you should know 
             </h1> 
         </> 
     ); 
 } 
  
 export default Stuff;
