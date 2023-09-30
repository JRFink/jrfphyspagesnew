import Link from 'next/link';
import style from '@/styles/general.module.css';

const Fluid = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Fluids: pressure &#38; forces
            </h1>
            <p>
                Pressure and forces... 
            </p>
            
        </>
    );
}

export default Fluid;