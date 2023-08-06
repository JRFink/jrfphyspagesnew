import Link from 'next/link';
import style from '@/styles/general.module.css';
import VecEx from '@/pages/exercises/gp1/vecex';
import Helpful from '@/pages/components/helpful';

const Vec = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Vector review
            </h1>
            vectors and vector addition 
                vector addition 
            components of vectors 
                doing vector calculations using components 
            unit vectors 
            product of vectors 
                scalar product 
                calculating the scalar product using components 
                vector product 
                calculating the vector product using components 
            <br></br>
            <VecEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Vec;