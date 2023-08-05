import Link from 'next/link';
import EUKVid from '@/public/videos/gp1/euk';
import style from '@/styles/general.module.css';
import PuEx from '@/pages/exercises/gp1/puex';
import Helpful from '@/pages/components/helpful';

const PU = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Potential Energy & Energy Conservation
            </h1>
            <br></br>
            <h2>
                1. Potential energy
            </h2>
            <h2>
                2. Conservative and non-conservative forces
            </h2>
            <h2>
                3. Conservation of energy in general
            </h2>
            <h3>
                3.1 Conservation of mechanical energy
            </h3>
            <h4>
                3.1.1 Gravitational potential energy
            </h4>
            <h4>
                3.1.2 Elastic potential energy
            </h4>
            <h2>
                4. Energy diagrams
            </h2>
            <br></br>
            <EUKVid />
            <br></br>
            <br></br>
            <PuEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default PU;