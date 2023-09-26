import Link from 'next/link';
import style from '@/styles/general.module.css';
import RelEx from '@/pages/exercises/imp/relex';
import Helpful from '@/pages/components/helpful';

const Rel = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Intro to Relativity
            </h1>
<p>
The proper length is given by 
</p> 
            <div className={style.equationBox}> 
                 <div className={style.equation}> &#916; l<span><sub>0</sub></span> = &#947; &#916;l  </div> 
                 <div className={style.equationNumber}> &#40;1&#41; </div>
<br />
<p>
And the proper time is given by 
</p> 
            <div className={style.equationBox}> 
                 <div className={style.equation}> &#964; <span><sub>0</sub></span> = &#964; / &#947; </div> 
                 <div className={style.equationNumber}> &#40;2&#41; </div>
<br />
<p>
The relativistic momentum is given by 
</p> 
            <div className={style.equationBox}> 
                 <div className={style.equation}> <b>p</b> = &#947;  m<b>v</b> </div> 
                 <div className={style.equationNumber}> &#40;3&#41; </div>
<br />
            <RelEx />
            <Helpful />
        </>
    );
}

export default Rel;