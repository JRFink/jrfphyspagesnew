import Link from 'next/link'
import style from '@/styles/general.module.css';

const Warr = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1/east" className={style.backtoLink}>East</Link>
        <h1 className={style.centerText}>
            Physics in Warring states period
        </h1>
       </> 
    );
}

export default Warr; 