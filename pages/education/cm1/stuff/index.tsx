import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Stuff = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/cm1" className={style.backtoLink}>Class mech 1</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                 Question database 
             </h1> 
         </> 
     ); 
 } 
  
 export default Stuff;
