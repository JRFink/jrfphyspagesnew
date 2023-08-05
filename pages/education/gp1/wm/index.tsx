import Link from 'next/link';
import style from '@/styles/general.module.css';
import WmEx from '@/pages/exercises/gp1/wmex';
import Helpful from '@/pages/components/helpful';

const Wave = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Wave Motion
            </h1>
            <br></br>
            <h2>
                1. Types of wave motion
            </h2>
            <h2>
                2. Describing wave motion
            </h2>
            <h2>
                3. Energy in waves
            </h2>
            <h2>
                4. Wave equation
            </h2>
            <h2>
                5. Superposition
            </h2>
            <br></br>
            <WmEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Wave;