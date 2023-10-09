import Link from 'next/link';
import style from '@/styles/general.module.css';

const WkeHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Work and kinetic energy hw
            </h1>
   <p>   
   <ul>   
        <li>Work kinetic energy theorem</li>  
        <li>1d</li>    
        <li>2d</li>   
        <li>3d</li> 
        <li>Power</li>  
   </ul>   
   </p>
        </>
    );
}

export default WkeHw;