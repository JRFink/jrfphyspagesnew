import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import bsphere from '@/public/images/bsphere.svg';
import Helpful from '@/pages/components/helpful';

const QuantI = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Quantum Information &#38; Computing
                </h1>
            </div>
            <h2>
                Intro
            </h2>
            <p>
                Quantum information studies how information is stored at the atomic and subatomic levels; 
                quantum computing studies how to use that information to solve practical problems. Quantum information is stored differently than classical information,
                and ones uses that fact to solve problems that are difficult to solve classicaly. 
                Find some of the latest research <a href="https://journals.aps.org/prxquantum/">here</a>.      
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
                    src={bsphere}
                    style={{
                        width: '50%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The bloch sphere on a white background" 
                />
            </div>
            <br /> 
            <br />
            <br />
            <p>
                Learn more about quantum computing with <Link href="https://qiskit.org/">Qiskit</Link> from IBM. 
            </p>
            <br />
            <h2>
                Major players 
            </h2>
                <p>
                    There are some major players in the space. They include
                </p>
                    <ul>
                        <li><Link href="https://www.ibm.com/quantum">IBM</Link></li>
                        <br />
                        <li><Link href="https://quantumai.google">Google</Link></li>
                        <br />
                        <li><Link href="https://azure.microsoft.com/en-us/solutions/quantum-computing/">Microsoft</Link></li>
                        <br />
                        <li><Link href="https://www.rigetti.com/">Rigetti</Link></li>
                        <br />
                        <li><Link href="https://coldquanta.com/">Infleqtion</Link> - thank you boulder</li>
                        <br />
                        <li><Link href="https://www.dwavesys.com/">D-Wave</Link></li>
                         
                        
                    </ul>
                    <br />
                    <br />
            <br />
            <div className={style.flexContainer}>
                <Link href="/research/qis#his" className={style.generalLink}>History</Link>
                <br />
                <Link href="/research/qis#theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/qis#exp" className={style.generalLink}>Experiment</Link>
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
            <ul>
                <li><Link href="https://physics.mit.edu/research-areas/quantum-information-science/">MIT</Link></li>
                <br />
                <li><Link href="https://jila.colorado.edu/research/quantum-information-science-technology">Boulder</Link></li>
                <br />
                <li><Link href="https://cs.lbl.gov/what-we-do/quantum-computing/">Berkeley</Link></li>
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
        </>
    );
}

export default QuantI;
