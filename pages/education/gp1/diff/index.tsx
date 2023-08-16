import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewDiff } from '@/pages/components/modoverview';
import DiffEx from '@/pages/exercises/gp1/diffex';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Differential equations 
            </h1>
            <p> 
                Differential equations isn&#39;t something you normally learn in gen phys 1, but learning a few pieces of it will drastically help you understand Newton&#39;s laws more effectively. More specifically, will help you understand the second law and how to solve it in different cases. In some cases it is easy to solve; in other cases it isn&#39;t and that&#39;s why you have to result to other means.
             </p> 
            <ModoverviewDiff />
                <h2 className={style.h2SectionColor} id="types">
                    1. Types
                </h2>
                <br></br>
                <br></br>
                <h2 className={style.h2SectionColor} id="first">
                    2. First order &#38; second order
                </h2>
                    <h3>
                        2.1 First 
                    </h3>
            <p> 
                             A first-order ODE is an equation of the form dg/dt = f(g,t). 
           </p>
                    <h3>
                        2.2 Second
                    </h3>
            <br></br>
            <br></br>
            <DiffEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Osc;
