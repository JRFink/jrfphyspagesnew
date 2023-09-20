import Link from 'next/link';
import style from '@/styles/general.module.css';

const ApCmech = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}> 
           AP Physics C - mechanics 
        </h1> 
        <br />
<p> 
The class consists of seven units&#59; they are: 
<li>Kinematics</li>
<li>Newton&#39;s laws of motion</li>
<li>Work, energy, and power</li>
<li>Systems of particles and linear momentum</li>
<li>Rotation</li>
<li>Oscillations</li>
<li>Gravitation</li>
</p>
         <p>  
            Find the curriculum  
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics"> here</a>. 
         </p>  
      </> 
 ); 
 }  
  
 export default ApCmech;
