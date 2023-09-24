import Link from 'next/link'
import style from '@/styles/general.module.css';

const Twent = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Development through 20th century
        </h1>
       </> 
    );
}

export default Twent; 