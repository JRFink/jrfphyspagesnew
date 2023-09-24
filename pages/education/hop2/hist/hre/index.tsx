import Link from 'next/link'
import style from '@/styles/general.module.css';

const Hre = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/hist" className={style.backtoLink}>Hist</Link>
        <h1 className={style.centerText}>
            Continuing HRE
        </h1>
       </> 
    );
}

export default Hre; 