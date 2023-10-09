import Link from 'next/link';
import style from '@/styles/general.module.css';

const Cred = () => { 
    return (
       <>
           <h1 className={style.centerText}>
               Credentials
           </h1>
           <p>
                I have a degree in physics,
                and worked as a tutor for one year! 
           </p>
       </>
    );
}

export default Cred;
