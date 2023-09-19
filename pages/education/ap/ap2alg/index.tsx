import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ap2alg = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/AP" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}> 
           AP Physics 2 - algebra  
        </h1> 
         <p>  
            Find the curriculum  
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-2-algebra-based"> here</a>. 
         </p>  
      </> 
 ); 
 }  
  
 export default Ap2alg;
