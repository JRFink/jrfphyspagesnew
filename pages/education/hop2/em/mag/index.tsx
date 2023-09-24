import Link from 'next/link'
import style from '@/styles/general.module.css';

const Mag = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/em" className={style.backtoLink}>Electromagnetism</Link>
        <h1 className={style.centerText}>
            Magnetic force
        </h1>
       </> 
    );
}

export default Mag; 