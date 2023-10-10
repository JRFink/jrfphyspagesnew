import Link from 'next/link';
import style from '@/styles/general.module.css';

const Trq1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Dynamics of rotation hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/trq/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/trq/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/trq/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/trq/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/trq/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>   
                    <li>Variables</li>
                    <li>Rolling</li>  
                    <li>Angular momentum</li>    
                    <li>Torque</li>      
                </ul> 
            </p>
        </>
    );
}

export default Trq1;