import Link from 'next/link';    
   import Image from 'next/image';   
   import style from '@/styles/general.module.css';   
  
   const Diss = () => {   
       return (   
           <>   
               <br />   
               <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>   
               <br />   
               <br />   
               <h1 className={style.centerText}>   
                   Nuclear dissertations   
               </h1>   
               <br />   
           </>   
       );   
   }   
  
   export default Diss;
