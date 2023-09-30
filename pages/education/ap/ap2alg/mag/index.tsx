import Link from 'next/link';
import style from '@/styles/general.module.css';

const Mag = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Magnetism and EM induction
            </h1>
            <p>
                Magnetism and EM induction... 
            </p>
            
        </>
    );
}

export default Mag;