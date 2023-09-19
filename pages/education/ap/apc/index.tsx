import Link from 'next/link';
import style from '@/styles/general.module.css';

const ApC = () => {  
   return (  
      <>  
        <h1 className={style.centerText}> 
           AP Physics C &#174;   
        </h1> 
         <p>  
            AP Physics C &#174; is divided into two parts: <Link href="/education/ap/apc/apcmech">mechanics </Link> 
            and <Link href="/education/ap/apc/apcelec">electricity and magnetism</Link>. 
         </p>  
      </> 
 ); 
 }  
  
 export default ApC;