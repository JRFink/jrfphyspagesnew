import Link from 'next/link'; 
 import style from '@/styles/general.module.css'; 
  
 const Expver = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
             <h1 className={style.centerText}> 
                 Experimental verification
             </h1> 
             <p>
                Here is the experimental verification of the equations in gen phys 1.
             </p>
         </> 
     ); 
 } 
  
 export default Expver;
