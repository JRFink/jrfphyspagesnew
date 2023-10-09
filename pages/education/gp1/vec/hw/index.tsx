import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hw = () => { 
    return ( 
       <>
         <br />
         <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
         <br />
         <br />
         <h1 className={style.centerText}>
            Vector hw
         </h1>
         <p>
             <ul>
                  <li>Defining vectors</li>
                  <li>Vector addition, subtraction</li>
                  <li>Dot product</li>
                  <li>Cross product</li>
                  <li>Vectors and phys</li>
             </ul>
         </p>
       </>
    );
}

export default Hw;
