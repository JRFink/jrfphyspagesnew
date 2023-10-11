import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Stuff = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                 Question database
             </h1> 
             <p>
                Question database for gen phys 2..
             </p>
         </> 
     ); 
 } 
  
 export default Stuff;
