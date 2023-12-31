import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cosm from '@/public/images/cosm.jpg';
import Helpful from '@/pages/components/helpful';

const Astr = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Astrophysics
                </h1>
            </div>
            <p>
                Astrophysics studies the universe beyond earth. Some of the areas are galactic physics, cosmology, dark matter, and exoplanets.   
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
                    src={cosm}
                    style={{
                        width: '70%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A galaxy on a dark background" 
                />
            </div>
            <br />
            <br />
            <div className={style.flexContainer} id="intro">
                    <Link href="/research/astr/theor" className={style.generalLink}>Theory</Link>
                    <Link href="/research/astr/exp" className={style.generalLink}>Experiment</Link>
                    <Link href="/research/astr/data" className={style.generalLink}>Data</Link>  
                    <Link href="/research/astr/original" className={style.generalLink}>Original Papers</Link>  
                    <Link href="/research/astr/books" className={style.generalLink}>Books</Link>
                    <Link href="/research/astr/diss" className={style.generalLink}>Dissertations</Link>
                    <Link href="/research/astr/news" className={style.generalLink}>News</Link>
            </div>
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
            <br />
            <br />
                <h3 className={style.h3num}>
                    Ancient astronomy
                </h3>
                <br />
                <h3 className={style.h3num}>
                    Medieval astronomy
                </h3>
                <br />
                <h3 className={style.h3num}>
                    Enlightenment astronomy
                </h3>
                <p>
                    Copernicus publishes <em>De revolutionibus orbium coelestium</em> in 1543.  
                </p>
                <br />
                <h3 className={style.h3num}>
                    20<span><sup>th</sup></span> century astronomy
                </h3> 
                <p>
                    Einstein published his theory of general relativity in 1915.
                </p>
                <br />
                <h3 className={style.h3num}>
                    Astronomy today
                </h3> 
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

export default Astr;