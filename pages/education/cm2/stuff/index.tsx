import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Stuff = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/cm2" className={style.backtoLink}>Class mech 2</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                 Stuff you should know 
             </h1> 
         </> 
     ); 
 } 
  
 export default Stuff;
