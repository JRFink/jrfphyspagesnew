import Link from 'next/link';
import style from '@/styles/general.module.css';

const Energ = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Energy
            </h1>
            <p>
                Energy... 
            </p>
            
        </>
    );
}

export default Energ;