import Link from 'next/link';
import style from '@/styles/general.module.css'; 

const Exam1 = () => {
    return (
        <>
         <br /> 
         <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
         <br />
            <h1 className={style.centerText}>
                Exam 1
            </h1>
            <p>
                Exam 1 will cover the following topics...
            </p>
            <p>
                <ul> 
                     <li> 
                         Frames, units, measurement 
                     </li> 
                     <li> 
                         Vectors 
                     </li> 
                     <li> 
                         Applications of calc 
                     </li> 
                    <li>
                        Idealized models 
                    </li>
                     <li> 
                         Motion in 1, 2, and 3 dimensions 
                     </li>
                </ul>
            </p>
        </>
    );
}

export default Exam1; 