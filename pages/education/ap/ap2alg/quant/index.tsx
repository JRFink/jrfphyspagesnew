import Link from 'next/link';
import style from '@/styles/general.module.css';

const Quant = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Quantum, atomic, &#38; nuclear physics
            </h1>
            <p>
                Quantum, atomic, &#38; nuclear physics... 
            </p>
            
        </>
    );
}

export default Quant;