import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Max = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/rel" className={style.backtoLink}>Relativity</Link> 
         <h1 className={style.centerText}> 
             Basis in maxwell&#39;s equations
         </h1> 
        </>  
     ); 
 } 
  
 export default Max; 
