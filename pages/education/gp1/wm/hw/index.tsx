import Link from 'next/link';
import style from '@/styles/general.module.css';

const WmHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Wave motion hw
            </h1>
   <p>   
   <ul>   
        <li>Connection to oscillations</li>  
        <li>Types of wave motion</li>    
        <li>Describing wave motion</li>   
        <li>Energy in waves</li> 
        <li>Wave equation</li>
        <li>Superposition</li>  
   </ul>   
   </p>
        </>
    );
}

export default WmHw;