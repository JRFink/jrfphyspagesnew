import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewVec } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
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
            <br></br>
            <ModoverviewVec />
            <br></br>
            <h2 className={style.h2SectionColor} id="def">
                1. Defining vectors
            </h2>
            <p>
                Vectors have a rigorous definition of a vector in something called <Link href="https://www.ucl.ac.uk/~ucahmto/0005_2021/Ch4.S2.html">linear algebra</Link>, 
                but we won&#39;t get into that definition here. For our purposes we have to simply know that a vector is a mathematical object with two properties: 
                a magnitude and a direction. 
            </p>
            <p>
                Magnitude is a scalar quantity, meaning how big or small something is. And direction means which way the vector is pointing, 
                given by an angle or another way of conveying it.  
            </p>
                <h3>
                    1.1 Components
                </h3>
                <p>
                    Components are essential to vectors because they help us break down the vector down into its parts. 
                </p>
            <br></br>
            <h2 className={style.h2SectionColor} id="phys">
                2. Vectors and physics
            </h2>
            <p>
                Vectors are everywhere in physics. From displacement, velocity, and acceleration, to the electric force and phases between vectors in quantum mechanics, we describe many physical quantities with vectors.  
            </p>
                <h3>
                    2.1 Vectors and physics
                </h3>
                <p>
                    Knowing how to use vectors will make solving physics problems much easier. For example, when thinking about velocity and acceleration,
                    one can break down the velocity vector into its component parts, <b>x</b> <b>y</b> and <b>z</b>, and talk about the changes in velocity in each direction. 
                    By breaking down the changes into components, one can notice what is causing those changes in each direction. 
                </p>
            <h2 className={style.h2SectionColor} id="add">
                3. Vector addition and subtraction
            </h2>
                <p>
                    Vector addition and subtraction isn&#39;t too bad if you stick to cartesian coordinates. You add and subtract like normal. 
                    <b> a</b> = 3 <b>x</b> + 2 <b>y</b> + <b>z</b> plus <b>b</b> = 7 <b>x</b> - 3 <b>y</b> + <b>z </b> 
                    is just <b>a</b> + <b>b</b> = <b>c</b> = 10 <b>x</b> - <b>y</b> + 2 <b>z</b>.
                </p>
                <h3>
                    3.1 Adding and subtracting components
                </h3>
            <h2 className={style.h2SectionColor} id="mult">
                4. Vector multiplication
            </h2>
                <h3>
                    4.1 Scalar &#40;dot&#41; product
                </h3>
                <h3>
                    4.2 Vector &#40;cross&#41; product
                </h3>
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <VecEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Vec;