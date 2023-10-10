import Link from 'next/link';
import style from '@/styles/general.module.css';

const Rm1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Extended bodies and rotation hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/rm/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/rm/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/rm/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/rm/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/rm/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
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

export default Rm1;