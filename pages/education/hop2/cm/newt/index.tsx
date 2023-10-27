import Link from 'next/link'
import style from '@/styles/general.module.css';

const Newt = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2/cm" className={style.backtoLink}>Classical mechanics</Link>
        <h1 className={style.centerText}>
            Newtonian mechanics
        </h1>
        <br />
        <p>
            Read the <em>Principia</em> on the <Link href="https://archive.org/details/newtonspmathema00newtrich/mode/2up">Internet Archive</Link>.
        </p>
       </> 
    );
}

export default Newt; 