import Link from 'next/link'
import style from '@/styles/general.module.css';

const East = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1" className={style.backtoLink}>Hop 1</Link>
        <h1 className={style.centerText}>
            Physics in the east
        </h1>
       </> 
    );
}

export default East; 