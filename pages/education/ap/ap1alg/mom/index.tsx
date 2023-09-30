import Link from 'next/link';
import style from '@/styles/general.module.css';

const Mom = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Momentum
            </h1>
            <p>
                Momentum... 
            </p>
            
        </>
    );
}

export default Mom;