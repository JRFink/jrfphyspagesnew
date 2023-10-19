import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cell from '@/public/images/cell.svg';
import Helpful from '@/pages/components/helpful';

const Bio = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Biophysics
                </h1>
            </div>
            <p>
                Biophysics studies biological processes from a physical standpoint. 
                For example, biophysics studies soft materials and the reasons
                they are different from rigid materials. Find some of the 
                <a href="https://journals.aps.org/pre/"> research</a> here.
            </p>
            <br></br>
            <br></br>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={cell}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A colorful drawing of a cell" 
                />
            </div>
            <br />
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/research/bio/theor" className={style.generalLink}>Theory</Link>
                <Link href="/research/bio/exp" className={style.generalLink}>Experiment</Link>
                <Link href="/research/bio/data" className={style.generalLink}>Data</Link>
                <Link href="/research/bio/diss" className={style.generalLink}>Dissertations</Link>  
                <Link href="/research/bio/news" className={style.generalLink}>News</Link>
            </div>
            <br />
            <br />
            <h2 className={style.h3num}>
                Domain
            </h2>
            <p>
                Domain of biophysics ... 
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
                History of biophysics ... 
            </p>
            <br />
            <h2>
                Locations
            </h2>
            <p>
                Some of the best places to do this research are... 
            </p>
            <h3>
                America
            </h3>
            <h3>
                China
            </h3>
            <h3>
                England
            </h3>
            <h3>
                Germany
            </h3>
            <h3>
                India
            </h3>
            <h3>
                Japan
            </h3>
            <h3>
                Russia
            </h3>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Bio;
