import Link from 'next/link';
import style from '@/styles/general.module.css';

const ApCelec = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}> 
           AP Physics C - e and m  
        </h1> 
         <p>  
            Find the curriculum  
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism"> here</a>. 
         </p>  
      </> 
 ); 
 }  
  
 export default ApCelec;
