import Link from 'next/link'
import style from '@/styles/general.module.css';

const Hun = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1/east" className={style.backtoLink}>East</Link>
        <h1 className={style.centerText}>
            Physics in Hun dynasty
        </h1>
       </> 
    );
}

export default Hun; 