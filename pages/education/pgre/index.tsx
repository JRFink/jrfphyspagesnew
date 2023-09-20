import Link from 'next/link';
import style from '@/styles/general.module.css'; 
  
 const Pgre = () => {  
   return (  
      <>  
         <h1 className={style.centerText}> 
              Physics GRE &#174; prep 
         </h1> 
 <p> 
      This page will help you prepare for the <Link href="/pdf/fact-sheet-physics.pdf">physics gre</Link>. 
 </p> 
      <p>    
      Find some prep material here...  
        
      </p> 
      </> 
   );   
 } 
  
 export default Pgre; 
