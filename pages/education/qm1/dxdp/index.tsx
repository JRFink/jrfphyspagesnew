import Link from 'next/link';
import style from '@/styles/general.module.css';
import DxdpEx from '@/pages/exercises/qm1/dxdpex';
import Helpful from '@/pages/components/helpful';

const Dxdp = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Measurement and uncertainty 
            </h1>
            <DxdpEx />
            <Helpful />
        </>
    );
}

export default Dxdp;