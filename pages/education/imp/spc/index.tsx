import Link from 'next/link';
import style from '@/styles/general.module.css';
import SpcEx from '@/pages/exercises/imp/spcex';
import Helpful from '@/pages/components/helpful';

const Spc = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Space, time, and relativity
            </h1>
            <p>
            The proper length is given by 
            </p> 
            <br />
            <div className={style.equationBox}> 
                 <div className={style.equation}> &#916; l<span><sub>0</sub></span> &nbsp; = &#947; &#916;l </div> 
                 <div className={style.equationNumber}> &#40;1&#41; </div>
            </div>
            <br />
            <p>
            The proper time is given by 
            </p> 
            <br />
            <div className={style.equationBox}> 
                 <div className={style.equation}> &#964; <span><sub>0</sub></span> &nbsp; = &#964; / &#947; </div> 
                 <div className={style.equationNumber}> &#40;2&#41; </div>
            </div>
            <br />
            <p>
            The relativistic momentum is given by 
            </p> 
            <br />
            <div className={style.equationBox}> 
                 <div className={style.equation}> <b>p</b> &nbsp; = &#947;  m<b>v</b> </div> 
                 <div className={style.equationNumber}> &#40;3&#41; </div>
            </div>
            <br />
            <br />
            <p>
            The energy mass and momentum relation is 
            </p> 
            <br />
            <div className={style.equationBox}> 
                 <div className={style.equation}> E<span><sup>2</sup></span> &nbsp; &#8776;
                    &#40;mc<span><sup>2</sup></span>&#41;<span><sup>2</sup></span> + &#40;pc&#41;<span><sup>2</sup></span></div>
                 <div className={style.equationNumber}> &#40;4&#41; </div>
            </div>
            <br />
            <br />
            <SpcEx />
            <Helpful />
        </>
    );
}

export default Spc;