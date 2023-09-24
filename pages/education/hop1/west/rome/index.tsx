import Link from 'next/link'
import style from '@/styles/general.module.css';

const Rome = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1/west" className={style.backtoLink}>West</Link>
        <h1 className={style.centerText}>
            Physics in Rome
        </h1>
       </> 
    );
}

export default Rome; 