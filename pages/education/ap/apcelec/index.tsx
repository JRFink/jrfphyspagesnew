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
        <br />
<p>
    The current structure of the class consists of five units&#59; they are: 
<ol> 
<li>Electrostatics</li>
<li>Conductors, capacitors, dielectrics</li>
<li>Electric circuits</li>
<li>Magnetic fields</li>
<li>Electromagnetism</li>
</ol>
</p>
         <p>  
            Find the curriculum  
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism"> here</a>. 
         </p>  
      </> 
 ); 
 }  
  
 export default ApCelec;
