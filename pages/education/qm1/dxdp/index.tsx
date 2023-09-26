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
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#8710;x&#8710;p = &#8463; / 2 </div>
                    <div className={style.equationNumber}>&#40;1&#41;</div>
            </div>
            <br />
            <br />
            <DxdpEx />
            <Helpful />
        </>
    );
}

export default Dxdp;