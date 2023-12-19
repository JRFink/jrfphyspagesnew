import Link from 'next/link' 
import style from '@/styles/general.module.css'; 

 const Tbooks = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link> 
         <h1 className={style.centerText}> 
             Textbooks 
         </h1> 
         <p>
            Here are some popular textbooks for gen phys 2:
         </p>
        </>  
     ); 
 } 

 export default Tbooks; 