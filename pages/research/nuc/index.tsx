import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import nuc from '@/public/images/nuc.svg';
import Helpful from '@/pages/components/helpful';

const Nuclear = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Nuclear physics
                </h1>
            </div>
            <p>
                Nuclear physics research centers on two areas - nuclear structure and nuclear matter. 
                Nuclear structure focuses on protons, neutrons, ionized atoms, and the particles that make them up 
                - quarks and gluons.  
                Nuclear matter focuses on different compositions of nuclei - the quark gluon plasma (created in high-energy collisions), 
                neutron stars, and nucleon gases, to name a few. 
                You can find some of the latest research <a href="https://journals.aps.org/prc/">here</a>.  
                The division in the <a href="https://science.osti.gov/np/Research">Department of Energy</a> will also keep you busy. 
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
                    src={nuc}
                    style={{
                        width: '50%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="An atom with three electrons" 
                />
            </div>
            <br />
            <br />
            <br />
            <div className={style.flexContainer}>
                <Link href="/research/nuc/theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/nuc/exp" className={style.generalLink}>Experiment</Link>
                <br />
                <Link href="/research/nuc/equat" className={style.generalLink}>Equation page</Link>
                <br />
                <Link href="/research/nuc/news" className={style.generalLink}>News</Link>
                <Link href="/research/nuc/diss" className={style.generalLink}>Dissertations</Link>
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
                    The structure of atomic nuclei starts with protons and neutrons. 
                    The number of protons determines the element, but the number of neutrons does not. 
                    A proton consists of two up quarks and one down quark, while a neutron consists of one up and two down quarks. 
                </p>
            <br />
            <h2 className={style.h2SectionColor} id="his"> 
                Relations &#40;forces&#41;
            </h2>
                <p>
                    The relations within the nucleus are the electromagnetic, the strong, and the weak force. 
                </p>
            <br />
            <h2 className={style.h2SectionColor} id="his"> 
                History
            </h2>
                <p>
                    History ... 
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

export default Nuclear;