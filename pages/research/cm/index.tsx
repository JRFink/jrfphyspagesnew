import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import Helpful from '@/pages/components/helpful';

const CondensedM = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Condensed matter
                </h1>
            </div>
            <p>
                Condensed matter physics studies the macroscopic and microscopic physical properties of objects, 
                objects ranging from the very dense to the very not-dense states.
                What principles are responsible for the solid nature of solids, the liquid nature of liquids, or 
                the very dense 
                <a href="https://www.colorado.edu/today/2005/05/11/bose-einstein-condensate-turns-10-creation-colorado-laboratory-gave-birth-new-field"> Bose-Einstein condensate</a>?
                Condensed matter investigates these questions. You can find some of the latest  
                research <a href="https://journals.aps.org/prb/">here</a>.
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
                    src={cm}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A crystal like structure with white nodes on a dark background" 
                />
            </div>
            <br />
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/research/cm/theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/cm/exp" className={style.generalLink}>Experiment</Link>
                <br />
                <Link href="/research/cm/data" className={style.generalLink}>Data</Link>
                <br />
                <Link href="/research/cm/diss" className={style.generalLink}>Dissertations</Link>
                <br />
                <Link href="/research/cm/news" className={style.generalLink}>News</Link>
                <br /> 
                 
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
            <h2 className={style.h2SectionColor} id="his"> 
                History
            </h2>
            <p>
                History ... 
            </p>
            <br />
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

export default CondensedM;