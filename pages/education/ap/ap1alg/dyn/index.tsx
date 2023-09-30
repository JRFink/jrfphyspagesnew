import Link from 'next/link';
import style from '@/styles/general.module.css';

const Dyn = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Dynamics
            </h1>
            <p>
                Dynamics... 
            </p>
            
        </>
    );
}

export default Dyn;