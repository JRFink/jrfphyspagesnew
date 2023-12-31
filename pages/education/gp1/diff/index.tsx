import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewDiff } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import DiffEx from '@/pages/exercises/gp1/diffex';
import Quizheading from '@/pages/components/quizHeading';
import Diffquiz from '@/pages/education/gp1/diff/quiz';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Differential equations 
            </h1>
            <br /> 
            <ModoverviewDiff />
            <br />
            <LearnGoal />
            <h2> 
                Introduction 
            </h2>
            <p> 
                As a prelude to describing what causes changes in motion, we study differential equations. These equations help us understand how to link the changes in motion to what caused them.
            </p> 
            <p> 
                Differential equations isn&#39;t something you typically learn in gen phys 1. Learning a few pieces of it, though, will drastically help you understand Newton&#39;s second law more effectively. They will help you understand how to solve the second law in different cases. In some cases the equation is easy to solve, but in other cases it is not, and that is when you have to result to other strategies to solve physical problems.
            </p> 
            <br />
            <h2 className={style.h2SectionColor} id="types">
                1. Types
            </h2>
            <p> 
                There are different types of differential equations. 
            </p>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="first">
                2. First order &#38; second order
            </h2>
            <br />
                <h3 className={style.h3num}>
                    2.1 
                </h3> 
                <h3 className={style.h3text}>
                    First
                </h3>
                    <h4> 
                        &nbsp; &nbsp; 2.1.1 First
                    </h4> 
            <h2 className={style.greenExample}> 
                Example 
            </h2>
                        <p> 
                            A first-order ODE is an equation of the form dg/dt = f(g,t). 
                        </p>
                <h3 className={style.h3num}>
                    2.2
                </h3> 
                <h3 className={style.h3text}>
                    Second
                </h3>
                    <h4> 
                        &nbsp; &nbsp; 2.2.1 Second
                    </h4> 
            <h2 className={style.greenExample}> 
                Example 
            </h2>
            <br />
            <br />
            <Summary /> 
            <br />
            <br></br>
            <br></br>
            <DiffEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <br /> 
            <Diffquiz />
            <br />
            <br />
            <Link href="/education/gp1/nl" className={style.backtoLink}>Newton&#39;s laws &#10140;</Link>  
             <br />  
             <br />                             
             <Helpful />
        </>
    );
}

export default Osc;
