import Link from 'next/link';
import style from '@/styles/general.module.css';

const Harm = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Simple harmonic motion
            </h1>
            <p>
                Simple harmonic motion... 
            </p>
            
        </>
    );
}

export default Harm;