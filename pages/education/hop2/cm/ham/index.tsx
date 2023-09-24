import Link from 'next/link'
import style from '@/styles/general.module.css';

const Ham = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/cm" className={style.backtoLink}>Classical mechanics</Link>
        <h1 className={style.centerText}>
            Hamiltonian mechanics
        </h1>
       </> 
    );
}

export default Ham; 