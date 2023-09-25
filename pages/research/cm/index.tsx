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
            <div className={style.flexContainer}>
                <Link href="/research/cm#his" className={style.generalLink}>History</Link>
                <br />
                <Link href="/research/cm#theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/cm#exp" className={style.generalLink}>Experiment</Link>
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
            <br />
            <h2 className={style.h2SectionColor} id="news"> 
                News
            </h2>
                    <p>
                        News ... 
                    </p>
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

export default CondensedM;