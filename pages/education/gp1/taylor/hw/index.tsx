import Link from 'next/link';
import style from '@/styles/general.module.css';

const TaylorHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Taylor series hw
            </h1>
            <p>  
                <ul>  
                    <li>Theory</li> 
                    <li>Appl 1</li>   
                    <li>Appl 2 </li>  
                    <li>Appl 3</li>  
                </ul>  
            </p>
        </>
    );
}

export default TaylorHw;