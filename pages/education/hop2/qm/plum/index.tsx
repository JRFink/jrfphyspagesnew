import Link from 'next/link' 
 import style from '@/styles/general.module.css'; 
  
 const Plum = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/hop2/qm" className={style.backtoLink}>Quantum mechanics</Link> 
         <h1 className={style.centerText}> 
             Thomson&#39;s plum pudding
         </h1> 
        </>  
     ); 
 } 
  
 export default Plum; 
