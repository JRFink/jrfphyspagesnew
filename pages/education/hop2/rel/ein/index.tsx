import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Ein = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/rel" className={style.backtoLink}>Relativity</Link> 
         <h1 className={style.centerText}> 
             Einstein&#39;s major works
         </h1> 
        </>  
     ); 
 } 
  
 export default Ein; 
