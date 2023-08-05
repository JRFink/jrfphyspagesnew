import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful';

const Math = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Math background
            </h1>
            <h2>
                1. Working with vectors
            </h2>
            <h3>
                1.1 Addition, subtraction, multiplication
            </h3>
            <h2>
                2. Derivatives
            </h2>
            <h2>
                3. Integrals
            </h2>


            {/* Integrals 
            integral calculus 
            curilinear coords 
            dirac delta function 
            theory of vector fields */}
            <Helpful />
        </>
    );
}

export default Math;