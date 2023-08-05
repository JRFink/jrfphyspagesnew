import Link from 'next/link';
import style from '@/styles/general.module.css';
import IEx from '@/pages/exercises/gp2/iex';
import Helpful from '@/pages/components/helpful';

const I = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electric Current 
            </h1>
            {/* current 
            resisitivity 
            resistance 
            electromotive force and circuits 
            energy and power in electric circuits 
            theory of metallic conduction 

            electric current 
            current density 
            resistance and resistivity 
            ohms law 
            power, semiconductors, superconductors  */}

            <IEx />
            <Helpful />
        </>
    );
}

export default I;