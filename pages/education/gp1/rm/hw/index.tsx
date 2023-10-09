import Link from 'next/link';
import style from '@/styles/general.module.css';

const RotHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Extended bodies and rotation hw
            </h1>
   <p> 
 <ul> 
      <li>Angular position</li>
      <li>Angular velocity</li>  
      <li>Angular acceleration </li> 
      <li>Position and angular position</li> 
      <li>Speed and angular speed</li> 
      <li>Acceleration and angular acceleration</li> 
      <li>Uniform circular motion</li> 
      <li>Non-uniform circular motion</li>
      <li>Moment of inertia</li>
      <li>Parallel-axis theorem</li>
      <li>Energy</li>
 </ul> 
 </p>
        </>
    );
}

export default RotHw;