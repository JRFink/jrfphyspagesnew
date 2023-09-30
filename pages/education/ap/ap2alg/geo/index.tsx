import Link from 'next/link';
import style from '@/styles/general.module.css';

const Geo = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Geometric and physical optics
            </h1>
            <p>
                Geometric and physical optics... 
            </p>
            
        </>
    );
}

export default Geo;