import Link from 'next/link'
import style from '@/styles/general.module.css';

const Ach = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1/east" className={style.backtoLink}>East</Link>
        <h1 className={style.centerText}>
            Physics in Achaemenid dynasty
        </h1>
       </> 
    );
}

export default Ach; 