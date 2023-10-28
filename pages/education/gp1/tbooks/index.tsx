import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 

 const Tbooks = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
         <h1 className={style.centerText}> 
             Textbooks 
         </h1> 
        </>  
     ); 
 } 

 export default Tbooks; 
