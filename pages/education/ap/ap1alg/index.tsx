import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ap1alg = () => { 
    return ( 
       <> 
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}>
            AP Physics 1 - algebra 
        </h1>
        <br />
        <p> 
            Find the curriculum 
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-1-algebra-based"> here</a>.
        </p> 
       </>
  );
  } 
  
  export default Ap1alg;