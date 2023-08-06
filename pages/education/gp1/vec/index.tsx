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
            <h2 className={style.h2SectionColor}>
                1. Defining vectors
            </h2>
            <h3>
                1.1 Components
            </h3>
            <h2 className={style.h2SectionColor}>
                2. Vectors and physics
            </h2>
            <h3>
                2.1 Vectors and physics
            </h3>
            <h2 className={style.h2SectionColor}>
                3. Vector addition and subtraction
            </h2>
            <h3>
                3.1 Adding and subtracting components
            </h3>
            <h2 className={style.h2SectionColor}>
                4. Vector multiplication
            </h2>
            <h3>
                4.1 Scalar &#40;dot&#41; product
            </h3>
            <h3>
                4.2 Vector &#40;cross&#41; product
            </h3>
            <br></br>
            <VecEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Vec;