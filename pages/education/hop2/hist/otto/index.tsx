import Link from 'next/link'
import style from '@/styles/general.module.css';

const Otto = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/hist" className={style.backtoLink}>Hist</Link>
        <h1 className={style.centerText}>
            Continuing ottoman empire
        </h1>
       </> 
    );
}

export default Otto; 