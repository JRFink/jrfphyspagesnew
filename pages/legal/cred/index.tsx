import Link from 'next/link';
import style from '@/styles/general.module.css';

const Cred = () => { 
    return (
       <>
           <h1 className={style.centerText}>
               Credentials
           </h1>
           <p>
                I have a degree in physics! 
           </p>
       </>
    );
}

export default Cred;
