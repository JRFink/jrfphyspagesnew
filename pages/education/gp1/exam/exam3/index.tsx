import Link from 'next/link';
import style from '@/styles/general.module.css'; 

const Exam3 = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Exam 3
            </h1>
            <p>
                Exam 3 will cover the following topics...
            </p>
            <p>
                <ul>
                    <li> 
                         Momentum, impulse, and collisions 
                     </li> 
                     <li> 
                         Rotational motion 
                     </li> 
                     <li> 
                         Dynamics of rotational motion 
                     </li> 
                     <li> 
                         Equilibrium 
                     </li> 
                     <li> 
                         Taylor expansions 
                     </li> 
                     <li> 
                         Gravity 
                     </li>
                </ul>
            </p>
        </>
    );
}

export default Exam3; 