import Link from 'next/link';
import style from '@/styles/general.module.css';

const SlawHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Second law hw
            </h1>
            <p>  
                <ul>  
                    <li>Entropy</li>
                    <li>Engines</li> 
                    <li>Refrigerators</li>   
                    <li>Statistics</li>  
                </ul>  
            </p>
        </>
    );
}

export default SlawHw;