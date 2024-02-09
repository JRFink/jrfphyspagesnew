import Link from 'next/link';
import style from '@/styles/general.module.css';

const Math = () => { 
    return ( 
       <> 
         <br />
         <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
         <h1 className={style.centerText}>
             Math
         </h1>
          <p> 
              The math you will need to know for general physics 1.
          </p>
         <ul> 
           <li>Algebra</li>
           <li>Geometry</li>
           <li>...</li>
         </ul>
       </>
      );
}

export default Math;
