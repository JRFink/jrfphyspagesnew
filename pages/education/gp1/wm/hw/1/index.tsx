import Link from 'next/link';
import style from '@/styles/general.module.css';

const Wm1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Wave motion hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/wm/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/wm/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/wm/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/wm/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/wm/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
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

export default Wm1;