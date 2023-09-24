import Link from 'next/link'
import style from '@/styles/general.module.css';

const Qm = () => {
    return (
       <>
       <br />
       <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Development of quantum mechanics
        </h1>
            <h2 className={style.numberLink}> 
                 5.1 
             </h2> 
             <Link href="/education/hop2/qm/dalt" className={style.generalLink}> 
                 Dalton&#39;s atomic theory 
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 5.2 
             </h2> 
             <Link href="/education/hop2/qm/elec" className={style.generalLink}> 
                 Thomson&#39;s electron
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 5.3 
             </h2> 
             <Link href="/education/hop2/qm/planck" className={style.generalLink}> 
                 Planck
             </Link> 
             <br />  
             <h2 className={style.numberLink}> 
                 5.4 
             </h2> 
             <Link href="/education/hop2/qm/plum" className={style.generalLink}> 
                 Thomson&#39;s plum pudding 
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 5.5 
             </h2> 
             <Link href="/education/hop2/qm/photo" className={style.generalLink}> 
                 Photoelectric effect
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 5.6 
             </h2> 
             <Link href="/education/hop2/qm/ruth" className={style.generalLink}> 
                 Rutherford&#39;s gold foil
             </Link>* 
             <br />  
             <h2 className={style.numberLink}> 
                 5.7 
             </h2> 
             <Link href="/education/hop2/qm/schrod" className={style.generalLink}> 
                 Schrodinger&#39;s equation
             </Link> 
             <br /> 
             <h2 className={style.numberLink}> 
                 5.8 
             </h2> 
             <Link href="/education/hop2/qm/heis" className={style.generalLink}> 
                 Heisenberg&#39;s uncertainty relation
             </Link> 
             <br />  
       </> 
    );
}

export default Qm; 