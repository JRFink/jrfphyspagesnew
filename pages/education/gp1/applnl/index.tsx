import Link from 'next/link';
import style from '@/styles/general.module.css';
import FlawEx from '@/pages/exercises/gp1/flawex';
import Helpful from '@/pages/components/helpful';

const ApplNl = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Applying Newton&#39;s laws
            </h1>

            <br></br>
            <br></br>
            <FlawEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default ApplNl;