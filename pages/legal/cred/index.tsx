import Link from 'next/link';
import style from '@/styles/general.module.css';

const Cred = () => { 
    return (
       <>
           <h1 className={style.centerText}>
               Academic handbook
           </h1>
           <p>
                This is the academic handbook for the school.  
           </p>
<p>
    <ul>
         <li>Policies</li>
         <li>Exams</li>
         <li>Academic honesty</li>
         <li>Research</li>
  </ul>
</p>
       </>
    );
}

export default Cred;
