import Link from 'next/link';
import style from '@/styles/general.module.css';

const Geo = () => { 
  return (
     <> 
        <br />
        <Link href="/research" className={style.backtoLink}>Research</Link>
        <h1 className={style.centerText}>
            Geophysics 
        </h1>
            <p> 
                Geophysics research centers on the structure 
                of the earth, its interior, crust, heat transfer, 
                and physical properties. 
            </p>
        <br />
        <div className={style.flexContainer} id="intro">
            <Link href="/research/geo/theor" className={style.generalLink}>Theory</Link>
            <Link href="/research/geo/exp" className={style.generalLink}>Experiment</Link>
            <Link href="/research/geo/equat" className={style.generalLink}>Equation page</Link>
            <Link href="/research/geo/diss" className={style.generalLink}>Dissertations</Link>  
            <Link href="/research/geo/news" className={style.generalLink}>News</Link>
            <Link href="/research/geo/data" className={style.generalLink}>Data</Link>
        </div>
        <br />
        <br />
        <h2 className={style.h3num}>
            Domain
        </h2>
        <p>
            Domain ... 
        </p>
        <br />
        <br />
        <h2 className={style.h2SectionColor} id="his"> 
            Motion
        </h2>
            <p>
                Motion ... 
            </p>
        <br />
        <h2 className={style.h2SectionColor} id="his"> 
            Structure
        </h2>
            <p>
                Structure ... 
            </p>
        <br />
        <h2 className={style.h2SectionColor} id="his"> 
            Relations &#40;forces&#41;
        </h2>
            <p>
                Relations ... 
            </p>
        <br />
        <br />
        <h2 className={style.h2SectionColor} id="his"> 
            History
        </h2>
        <p>
            History ... 
        </p>
        <br />
        <h2>
            Locations
        </h2>
        <p>
            Some of the best places to do this research are... 
        </p>
     </>
  );
}

export default Geo; 
