import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import laser from '@/public/images/laser.jpg';
import Helpful from '@/pages/components/helpful';

const Amo = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div  className={style.centerText}>
                <h1>
                    Atomic, Molecular, & Optical
                </h1>
            </div>
            <p>
                Atomic, molecular, and optical physics studies how light interacts with matter. 
                By studying how light interacts with matter, such as with atoms and molecules, one can study the physical principles governing 
                these objects. You can find some of the latest AMO research <a href="https://journals.aps.org/pra/">here</a>.
                One of the best places to do this research is my alma mater, <a href="https://www.colorado.edu/physics/research/atomic-molecular-and-optical-physics">CU</a>! 
            </p> 
            <p>
                One way that scientists study atoms is by cooling them down. They cool them down with a method called <Link href="/pdf/lasercooling.pdf" target="_blank">laser cooling</Link>.*
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
                    src={laser}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Laser with red light" 
                />
            </div>
            <br />
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/research/amo/theor" className={style.generalLink}>Theory</Link>
                <Link href="/research/amo/exp" className={style.generalLink}>Experiment</Link>
                <Link href="/research/amo/data" className={style.generalLink}>Data</Link>  
                <Link href="/research/amo/news" className={style.generalLink}>News</Link>
                <Link href="/research/amo/diss" className={style.generalLink}>Dissertations</Link>
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
            <h2 className={style.h2SectionColor}> 
                History
            </h2>
            <p>
                History ... 
            </p>
            <h2 className={style.h2SectionColor}> 
                Financials
            </h2>
            <p>
                You ultimately need money to do research. Here are some of the financial highlights...
            </p>
            <h2>
                Locations
            </h2>
                <p>
                    Some of the best places to do this research are 
                </p>
            <h3>
                America
            </h3>
                <ul>
                    <li>
                        <Link href="https://www.colorado.edu/physics/research/atomic-molecular-and-optical-physics">Boulder</Link>
                    </li>
                    <br></br>
                    <li>
                        <Link href="https://physics.mit.edu/research-areas/atomic-physics/">MIT</Link>
                    </li>
                    <br></br>
                    <li>
                        <Link href="https://physics.stanford.edu/research/atomic-molecular-and-optical-physics">Stanford</Link>
                    </li>
                </ul>
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
            <br></br>
            <br></br>
            <br></br>
            <p className={style.small}>
                * courtesy stanford
            </p>
        </>
    );
}

export default Amo;