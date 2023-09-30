import Link from 'next/link';
import style from '@/styles/general.module.css';

const Torq = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Torque and rotational motion
            </h1>
            <p>
                Torque and rotational motion... 
            </p>
            
        </>
    );
}

export default Torq;