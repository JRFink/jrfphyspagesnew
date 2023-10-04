import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import smdes from '@/public/images/smdes.png';
import partdiagram from '@/public/images/partdiagram.svg';
import Helpful from '@/pages/components/helpful';

const Particle = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Particle physics
                </h1>
            </div>
            <p>
                Particle physics studies the fundamental constituents of matter. 
                We describe these fundamental constituents in a model called the Standard Model.
                The Standard Model is similiar to the Periodic table - 
                just as the Periodic table categorizes elements by their important properties, the 
                Standard Model categorizes particles by their important properties: mass, charge, spin, etc. 
                You can find the latest research <a href="https://journals.aps.org/prd/">here</a>.
            </p>
            <p>
                In order to discover something about particles, you have to do an experiment. Scientists do these experiments with <em> particle accelerators</em>. 
                These accelerators are giant machines with complex parts, pushing particles close to the speed of light and then smashing them together. 
            </p> 
            <p>
                There are two types of accelerators: linear and circular. A linear accelerator is something like 
                <Link href="https://www6.slac.stanford.edu/research/advanced-accelerators"> SLAC</Link>, 
                and a circular accelerator is something like <Link href="https://home.cern/science/accelerators/accelerator-complex">CERN</Link>.
                Learn more about them <Link href="https://www.energy.gov/articles/how-particle-accelerators-work">here</Link>.
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
                    src={smdes}
                    style={{
                        width: '80%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The table of elementary particles" 
                />
            </div>
            <br />
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/research/particle/theor" className={style.generalLink}>Theory</Link>
                <Link href="/research/particle/exp" className={style.generalLink}>Experiment</Link>
                <Link href="/research/particle/equat" className={style.generalLink}>Equation page</Link>  
                <Link href="/research/particle/news" className={style.generalLink}>News</Link>
                <Link href="/research/particle/diss" className={style.generalLink}>Dissertations</Link>
            </div>
            <br />
            <br />
            <h2 className={style.h2SectionColor} id="mot"> 
                    Motion
                </h2>
                    <p>
                        Motion ... 
                    </p>
                    <div  
                        style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                        }} 
                    > 
                        <Image 
                            src={partdiagram} 
                            style={{ 
                                width: '50%', 
                                borderRadius: "20px", 
                                height: 'auto' 
                            }} 
                            sizes="100vw" 
                            alt="An elementary feynman diagram in blue and orange"  
                        /> 
                </div>
            <br /> 
            <br />
            <h2 className={style.h2SectionColor} id="struc"> 
                    Structure
                </h2>
                    <p>
                        Structure ... 
                    </p>
            <br />
            <br />
            <h2 className={style.h2SectionColor} id="rel"> 
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
                <h3 className={style.h3num}>
                    From atomic physics to particle physics
                </h3>
                <p>
                    We can begin our journey into particle physics by starting with atomic physics. The major developments in atomic physics which led to particle physics were
                <ol> 
                    <li>discovery of the electron</li>
                    <li>discovery of the proton</li>
                    <li>discovery of the neutron</li>
                </ol>
                </p>
                <br />
                <h3 className={style.h3num}>
                    Finding particles
                </h3>
                <br />
                <h3 className={style.h3num}>
                    Development of the standard model
                </h3>
                <br />
                <h3 className={style.h3num}>
                    Standard model today
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
                <ul>
                    <li>
                        <Link href="https://www.physics.ucsb.edu/research/high-energy-theory">UC Santa Barbara</Link>
                    </li>
                    <br></br>
                    <li>
                        <Link href="https://phy.princeton.edu/research/research-areas/high-energy-experiment">Princeton</Link>
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
            <h3>
                Switzerland
            </h3>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Particle;
