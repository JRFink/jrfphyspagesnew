import Link from 'next/link';
import style from '@/styles/general.module.css';
import RelmechEx from '@/pages/exercises/imp/relmechex';
import Helpful from '@/pages/components/helpful';

const Relmech = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Relativistic Mechanics
            </h1>
<p> 
 The famous mass-emergy relation is given by
 </p>  
             <div className={style.equationBox}>  
                  <div className={style.equation}> E = &#916;mc<span><sup>2</sup></span> 
 </div>  
 </div> 
                  <div className={style.equationNumber}> &#40;1&#41; </div> 
 <br />
            <RelmechEx />
            <Helpful />
        </>
    );
}

export default Relmech;