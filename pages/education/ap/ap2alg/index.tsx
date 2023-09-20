import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ap2alg = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}> 
           AP Physics 2 - algebra  
        </h1>
        <br /> 
<p> 
The current structure of the class consists of seven units&#59; they are:

<ol> 
     <li>fluids: pressure and forces</li>
     <li>thermodynamics</li>
     <li>electric force, field, and potential</li> 
     <li>electric circuits</li>
     <li>magnetism and electromagnetic       induction</li>
     <li>geometric and physical optics</li>
     <li>quantum, atomic, and nuclear physics</li> 
</ol>
</p>
         <p>  
            Find the curriculum  
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-2-algebra-based"> here</a>. 
         </p>  
      </> 
 ); 
 }  
  
 export default Ap2alg;
