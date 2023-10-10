import Link from 'next/link';
import style from '@/styles/general.module.css';

const Gas1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Gas hw
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/gp1/gas/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/gas/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/gas/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/gas/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/gas/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Ideal gas</li>
                    <li>Molecular theory</li>
                    <li>Adiabatic processes</li>
                </ul>   
            </p>
        </>
    );
}

export default Gas1;