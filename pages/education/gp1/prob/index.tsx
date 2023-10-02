import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Prob = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                Real world problems
             </h1> 
         </> 
     ); 
 } 
  
 export default Prob;