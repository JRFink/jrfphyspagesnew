import Link from 'next/link';
import style from '@/styles/general.module.css';

const Dual = () => { 
    return (
       <>
           <h1 className={style.centerText}>
               High school / college dual enrollment
           </h1>
           <br />
           <p>
                Are you wanting to take a class and get school credit?
           </p>
       </>
    );
}

export default Dual;
