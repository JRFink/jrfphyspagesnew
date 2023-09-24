import Link from 'next/link'
import style from '@/styles/general.module.css';

const Max = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/em" className={style.backtoLink}>Electromagnetism</Link>
        <h1 className={style.centerText}>
            Maxwell&#39;s equations
        </h1>
       </> 
    );
}

export default Max; 