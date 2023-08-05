import Link from 'next/link';
import style from '@/styles/general.module.css';
import QuantEx from '@/pages/exercises/imp/quantex';
import Helpful from '@/pages/components/helpful';

const Quant = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Intro to quantum mechanics
            </h1>
            <QuantEx />
            <Helpful />
        </>
    );
}

export default Quant;