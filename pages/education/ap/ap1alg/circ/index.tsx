import Link from 'next/link';
import style from '@/styles/general.module.css';

const Circ = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Circular motion &#38; gravity
            </h1>
            <p>
                Circular motion and gravity... 
            </p>
            
        </>
    );
}

export default Circ;