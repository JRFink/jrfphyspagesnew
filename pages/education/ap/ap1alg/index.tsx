import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ap1alg = () => { 
    return ( 
       <> 
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}>
            AP Physics 1 - algebra 
        </h1>
        <br />
        <p> 
             The current structure of the class consists of seven units; they are: 
<ol> 
   <li>kinematics</li>
   <li>dynamics</li>
   <li>circular motion and gravitation</li>
   <li>energy</li>
   <li>momentum</li>
   <li>simple harmonic motion</li>
   <li>torque and rotational motion</li>
</ol> 
        </p> 
        <p> 
            Find the curriculum 
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-1-algebra-based"> here</a>.
        </p> 
       </>
  );
  } 
  
  export default Ap1alg;