import Link from 'next/link';
import style from '@/styles/general.module.css';

const Elec = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap2alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Electric force, field &#38; potential
            </h1>
            <p>
                Electric force, field and potential... 
            </p>
            
        </>
    );
}

export default Elec;