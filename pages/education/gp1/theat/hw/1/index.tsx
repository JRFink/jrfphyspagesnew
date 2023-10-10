import Link from 'next/link';
import style from '@/styles/general.module.css';

const Frame1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Temperature and heat hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/theat/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/theat/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/theat/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/theat/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/theat/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
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

export default Frame1;