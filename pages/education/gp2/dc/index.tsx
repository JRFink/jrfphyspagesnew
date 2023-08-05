import Link from 'next/link';
import style from '@/styles/general.module.css';
import DcEx from '@/pages/exercises/gp2/dcex';
import Helpful from '@/pages/components/helpful';

const Dc = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                DC Circuits
            </h1>
            {/* resistors in series and parallel 
            kirchoff's rules 
            electrical measuring instruments 
            rc circuits 
            power distribution systems 

            single loop circuits 
            multiloop circuits 
            the ammeter and the voltmeter 
            rc circuits  */}
            <DcEx />
            <Helpful />
        </>
    );
}

export default Dc;