import Link from 'next/link';
import style from '@/styles/general.module.css';

import FirstthermVid from '@/public/videos/therm/firstthermvid';

const Therm = () => {
    return (
        <>
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Thermodynamics
            </h1>
            <br></br>
            <br></br>
            <FirstthermVid />
            <br></br>
            <br></br>
            <Link href="/education/therm/energy" className={style.generalLink}>Energy in Thermal Physics</Link><br></br>
            <br></br>
            <Link href="/education/therm/thermprop" className={style.generalLink}>Thermal Properties of Matter</Link><br></br>
            <br></br>
            <Link href="/education/therm/2nd" className={style.generalLink}>The Second Law</Link><br></br>
            <br></br>
            <Link href="/education/therm/re" className={style.generalLink}>Refrigerators and Engines</Link><br></br>
            <br></br>
            <Link href="/education/therm/ghts" className={style.generalLink}>Thermodynamic Relations</Link><br></br>
            <br></br>
            <Link href="/education/therm/cth" className={style.generalLink}>Chemical Thermodynamics</Link><br></br>
            <br></br>
            <Link href="/education/therm/b" className={style.generalLink}>Boltzmann Statistics</Link><br></br>
            <br></br>
            <Link href="/education/therm/q" className={style.generalLink}>Quantum Statistics</Link><br></br>
        </>
    );
}

export default Therm;