import Link from 'next/link';
import style from '@/styles/general.module.css';
import MaxEx from '@/pages/exercises/gp2/maxex';
import Helpful from '@/pages/components/helpful';

const Max = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Maxwell&apos;s Equations
            </h1>
            {/* electricity, magnetism, and light 
            generating electromagnetic radiation 
            electromagnetic spectrum 
            --
            gauss law 
            gauss law for magnetism 
            ampere's law 
            faradays law 

            gauss law for magnetic fields 
            induced magnetic fields 
            displacement current 
            magnets 
            magnetism and electrons 
            diamagnetism 
            paramagnetism 
            ferromagnetism */}


            <MaxEx />
            <Helpful />
        </>
    );
}

export default Max;