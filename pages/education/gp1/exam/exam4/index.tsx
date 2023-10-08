import Link from 'next/link';
import style from '@/styles/general.module.css'; 

const Exam4 = () => {
    return (
        <>
         <br /> 
         <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
         <br />
            <h1 className={style.centerText}>
                Exam 4
            </h1>
            <p>
                Exam 4 will cover the following topics...
            </p>
            <p>
                <ul>
                    <li> 
                         Fluids 
                     </li> 
                     <li> 
                         Oscillations 
                     </li> 
                     <li> 
                         Wave motion 
                     </li> 
                     <li> 
                         Temperature and heat 
                     </li> 
                     <li> 
                         Gases 
                     </li> 
                     <li> 
                         First two laws of thermodynamics 
                     </li>
                </ul>
            </p>
        </>
    );
}

export default Exam4; 