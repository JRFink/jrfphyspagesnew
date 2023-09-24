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
            <h2 className={style.numberLink}> 
                 4.1 
             </h2> 
             <Link href="/education/hop2/rel/max" className={style.generalLink}> 
                 Basis in maxwell&#39;s equations
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 4.2 
             </h2> 
             <Link href="/education/hop2/rel/ein" className={style.generalLink}> 
                 Einstein&#39;s major works
             </Link> 
             <br />
       </> 
    );
}

export default Rel; 