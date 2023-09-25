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
                Find the latest research <a href="https://journals.aps.org/prresearch/subjects/astrophysics">here</a>.  
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
            <div className={style.flexContainer}>
                <Link href="/research/astr#his" className={style.generalLink}>History</Link>
                <br />
                <Link href="/research/astr#theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/astr#exp" className={style.generalLink}>Experiment</Link>
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
            <h2 className={style.h2SectionColor} id="exp"> 
                Experiment
            </h2>
            <p>
                Experiment ... 
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

export default Astr;