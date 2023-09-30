import Link from 'next/link';
import style from '@/styles/general.module.css';

const Circ = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Electric circuits
            </h1>
            <p>
                Electric circuits... 
            </p>
            
        </>
    );
}

export default Circ;