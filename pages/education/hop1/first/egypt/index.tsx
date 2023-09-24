import Link from 'next/link'
import style from '@/styles/general.module.css';

const Egypt = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1/first" className={style.backtoLink}>First civ</Link>
        <h1 className={style.centerText}>
            Physics in Egypt
        </h1>
       </> 
    );
}

export default Egypt; 