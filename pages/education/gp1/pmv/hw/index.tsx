import Link from 'next/link';
import style from '@/styles/general.module.css';

const PmvHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Momentum, impulse, and collisions hw
            </h1>
             <p> 
                 <ul> 
                     <li>Center of mass</li> 
                     <li>Momentum</li> 
                     <li>Mechanical momentum</li> 
                     <li>Momentum in 1 d</li> 
                     <li>2 and 3 d</li> 
                     <li>Impulse</li> 
                     <li>Elastic collisions</li> 
                     <li>Inelastic collisions</li> 
                 </ul> 
             </p>
        </>
    );
}

export default PmvHw;