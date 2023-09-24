import Link from 'next/link'
import style from '@/styles/general.module.css';

const Rel = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Development of relativity
        </h1>
       </> 
    );
}

export default Rel; 