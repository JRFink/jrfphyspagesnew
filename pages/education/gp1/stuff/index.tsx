import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Stuff = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                 Stuff you should know 
             </h1> 
         </> 
     ); 
 } 
  
 export default Stuff;
