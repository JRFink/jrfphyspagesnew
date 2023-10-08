import Link from 'next/link';
import style from '@/styles/general.module.css'; 

const Exam2 = () => {
    return (
        <>
         <br /> 
         <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
         <br />
            <h1 className={style.centerText}>
                Exam 2
            </h1>
            <p>
                Exam 2 will cover the following topics...
            </p>
            <p>
                <ul>
                    <li> 
                         Simple differential equations 
                     </li> 
                     <li> 
                         Newton&#39;s first, second, and third law 
                     </li> 
                     <li> 
                         Applications of Newton&#39;s laws 
                     </li> 
                     <li> 
                         Work and kinetic energy 
                     </li> 
                     <li> 
                         Potential energy and energy conservation 
                     </li>
                </ul>
            </p>
        </>
    );
}

export default Exam2; 