import Link from 'next/link';
import style from '@/styles/general.module.css';

const Therm = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Thermodynamics
            </h1>
            <p>
                Thermodynamics... 
            </p>
            
        </>
    );
}

export default Therm;