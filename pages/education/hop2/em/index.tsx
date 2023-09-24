import Link from 'next/link'
import style from '@/styles/general.module.css';

const Em = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Development of electromagnetism
        </h1>
       </> 
    );
}

export default Em; 