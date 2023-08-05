import Link from 'next/link';
import style from '@/styles/general.module.css';
import GerlachEx from '@/pages/exercises/qm1/gerlachex';
import Helpful from '@/pages/components/helpful';

const Gerlach = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                From Experiment to theory - Stern Gerlach 
            </h1>
            <p>
                ... beautiful explanation here ... 
            </p>
            <GerlachEx />
            <Helpful />
        </>
    );
}

export default Gerlach;