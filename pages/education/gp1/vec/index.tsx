import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewVec } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import VecEx from '@/pages/exercises/gp1/vecex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
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
                <h3 className={style.h3num}>
                    1.1
                </h3>
                <h3 className={style.h3text}>
                    Components
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
                <h3 className={style.h3num}>
                    2.1
                </h3>
                <h3 className={style.h3text}>
                    Vectors and physics
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
                </p>
                <h3 className={style.h3num}>
                    3.1
                </h3>
                <h3 className={style.h3text}>
                    Adding and subtracting
                </h3>
                    <h4>
                        &nbsp; &nbsp; 3.1.1 Addition
                    </h4>
                    <div className={style.centerText}>
                        <p>
                            Focus on the components of the vector. 
                            <br />
                            <br />
                            <b> a</b> = 3 <b>x</b> + 2 <b>y</b> + <b>z</b> plus <b>b</b> = 7 <b>x</b> - 3 <b>y</b> + <b>z </b> 
                            is just <b>a</b> + <b>b</b> = <b>c</b> = 10 <b>x</b> - <b>y</b> + 2 <b>z</b>.
                        </p>
                    </div>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="mult">
                4. Vector multiplication
            </h2>
                <p>
                    Vector multiplication is where it gets a little more complicated to think about. We&#39;ll try to give an intuitive 
                    understanding of what&#39;s going on. No promises! 
                </p>
                <h3 className={style.h3num}>
                    4.1
                </h3>
                <h3 className={style.h3text}>
                    Scalar &#40;dot&#41; product
                </h3>
                    <p>
                        The dot product between two vectors tells us how much one vector is in the direction of the other. 
                        Sort of like an overlap. You can define the dot product algebraically or geometrically. 
                    </p>
                    <h4>
                        &nbsp; &nbsp; 4.1.1 Cartesian coordinates
                    </h4>
                        <p>
                            When using cartesian coordinates, you define the dot product <em>algebraically</em> as 
                            <br></br> 
                            <br></br>
                            <div className={style.centerText}>
                                <b>a </b> &#8226; <b>b </b>
                                = <b>a <sub>1</sub></b> <b>b <sub>1</sub></b> + <b>a <sub>2</sub></b> <b>b <sub>2</sub></b> + 
                                <b>a <sub>3</sub></b> <b>b <sub>3</sub></b> + ... + <b>a <sub>n</sub></b> <b>b <sub>n</sub></b>
                            </div>
                            <br></br>
                            <br></br>
                            You define it <em>geometrically</em> as 
                            <br></br>
                            <br></br>
                            <div className={style.centerText}>
                            <b>a </b> &#8226; <b>b </b> = | <b>a</b> | | <b>b</b> | cos<em> &#952;</em> 
                            </div>
                        </p>
                    <br></br>
                    <br></br>
                    <h4>
                        &nbsp; &nbsp; 4.1.2 Other coordinates
                    </h4>
                        <p>
                            We can also use the dot product in other coordinate systems; though, it gets complicated. For one, say you have
                            a vector in <Link href="https://tutorial.math.lamar.edu/classes/calcii/polarcoordinates.aspx">polar coordinates</Link>, 
                            it would be easier to just convert it to cartesian and then take the dot product.
                            You get into the realm of more advanced math.    
                        </p>
                <h3 className={style.h3num}>
                    4.2
                </h3>
                <h3 className={style.h3text}>
                    Vector &#40;cross&#41; product
                </h3>
                    <p>
                        The cross product tells us how much two vectors are <em>not</em> in the same direction. 
                    </p>
            <br></br>
            <Summary />
            <br></br>
            <br></br>
            <br></br>
            <VecEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
                        <Link href="/education/gp1/calc" className={style.backtoLink}>Calc review &#10140;</Link>  
            <br /> 
            <br /> 
            <Helpful />
        </>
    );
}

export default Vec;