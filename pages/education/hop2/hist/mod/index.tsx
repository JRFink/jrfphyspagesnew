import Link from 'next/link'
import style from '@/styles/general.module.css';

const Mod = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/hist" className={style.backtoLink}>Hist</Link>
        <h1 className={style.centerText}>
            Physics in modern europe
        </h1>
       </> 
    );
}

export default Mod; 