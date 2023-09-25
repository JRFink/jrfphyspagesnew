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
            <br />
            <div className={style.flexContainer}>
                <Link href="/research/geo#his" className={style.generalLink}>History</Link>
                <br />
                <Link href="/research/geo#theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/geo#exp" className={style.generalLink}>Experiment</Link>
                <br />
                <Link href="/research/qis#news" className={style.generalLink}>News</Link>
                <br />
            </div>
            <h2 className={style.h2SectionColor} id="his"> 
                History
            </h2>
            <p>
                History ... 
            </p>
            <h2 className={style.h2SectionColor} id="theor"> 
                Theory
            </h2>
            <p>
                Theory ... 
            </p>
            <h3 className={style.h3num}>
                    Domain
                </h3>
                <p>
                    Domain .. 
                </p>
                <br />
            <h2 className={style.h2SectionColor} id="exp"> 
                Experiment
            </h2>
            <p>
                Experiment ... 
            </p>
            <h2 className={style.h2SectionColor} id="news"> 
                News
            </h2>
                    <p>
                        News ... 
                    </p>
            <br />
     </>
  );
}

export default Geo; 
