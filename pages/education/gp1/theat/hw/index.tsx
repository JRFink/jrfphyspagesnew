import Link from 'next/link';
import style from '@/styles/general.module.css';

const TheatHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Temperature and heat hw
            </h1>
            <p>   
                <ul>   
                    <li>Temperature</li>  
                    <li>Zeroth law</li>    
                    <li>First law </li>   
                    <li>Thermal expansion</li> 
                    <li>Heat transfer</li>  
                </ul>   
            </p>
        </>
    );
}

export default TheatHw;