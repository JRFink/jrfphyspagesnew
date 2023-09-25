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
                <Link href="/research/qis#news" className={style.generalLink}>News</Link>
                <br />
            </div>
            <h2 className={style.h2SectionColor} id="his"> 
                History
            </h2>
                <p>
                    History ... 
                </p>
            <br />
            <h2 className={style.h2SectionColor} id="theor"> 
                Theory
            </h2>
                <p>
                    Theory ... 
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
                    <ul>
                       <li><Link href="https://stealthoptional.com/news/chinas-zuchongzhi-quantum-computer-is-the-most-powerful-in-the-world/" 
                       className={style.noUnder}>China beats Google&#39;s quantum computer</Link></li> 
                    </ul>
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
            <ul>
                <li><Link href="https://www.alibabacloud.com/knowledge/hot/quantum-computing-a-brief-overview">Alibaba</Link></li>
                <br />
                <li><Link href="">Baidu</Link></li>
                <br />
                <li><Link href="">Tencent</Link></li>
                <br />
                <li><Link href="">Huawei</Link></li>
                <br />
                <li><Link href="">ZTE</Link></li>
            </ul>
            <p>
                And apparently 
                <Link href="https://quantumzeitgeist.com/chinas-176-qubit-quantum-computing-platform-zuchongzhi-goes-global/"> Zuchongzhi </Link>
                is one of the best in the world.
            </p>
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
            <ul>
                <li><Link href="https://www.rqc.ru/?amp&amp" className={style.noUnder}>Russia Quantum Center - Российский квантовый центр</Link></li>
                <br />
                <li><Link href="https://lrc-quantum.ru/#platform" className={style.noUnder}>Quantum Platform - квантовый платформа</Link></li>
            </ul>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default QuantI;
