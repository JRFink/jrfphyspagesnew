import Link from 'next/link';
import style from '@/styles/general.module.css';

const Kin = () => {
    return (
        <>
            <br /> 
            <Link href="/education/ap/ap1alg" className={style.backtoLink}>AP phys 1</Link>
            <h1 className={style.centerText}>
                Kinematics
            </h1>
            <p>
                Kinematics... 
            </p>
            
        </>
    );
}

export default Kin;