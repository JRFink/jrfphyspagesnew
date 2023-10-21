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
                Quantum information studies how information is stored at the atomic and subatomic levels.
                Quantum computing studies how to use that information to solve practical problems. Quantum information is stored differently than classical information,
                and ones uses that fact to solve problems that are difficult to solve classically. 
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
            
            <br />
            <div className={style.flexContainer}>
                <Link href="/research/qis/theor" className={style.generalLink}>Theory</Link>
                <br />
                <Link href="/research/qis/exp" className={style.generalLink}>Experiment</Link>
                <br />
                <Link href="/research/qis/data" className={style.generalLink}>Data</Link>
                <br />
                <Link href="/research/qis/diss" className={style.generalLink}>Dissertations</Link>
                <br />
                <Link href="/research/qis/news" className={style.generalLink}>News</Link>
                <br />
                <Link href="/research/qis/int" className={style.generalLink}>International</Link>
                <br />
            </div>
            <br />
            <br />
            <h2 className={style.h3num}>
                Domain
            </h2>
            <p>
                The largest molecules are about 10 nm and the smallest molecules are about 1 angstrom.  
            </p>
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
                Learn more about quantum computing with <Link href="https://qiskit.org/">Qiskit</Link> from IBM. 
            </p>
            <br />
            <h2>
                Major players 
            </h2>
                <p>
                    There are some major players in the space. They include:
                </p>
                    <ul>
                        <li><Link href="https://www.ibm.com/quantum">IBM</Link></li>
                        <br />
                        <li><Link href="https://quantumai.google">Google</Link></li>
                        <br />
                        <li><Link href="https://azure.microsoft.com/en-us/solutions/quantum-computing/">Microsoft</Link></li>
                        <br />
                        <li><Link href="https://www.rigetti.com/">Rigetti</Link></li>
                            <ul>
                                <li>NYSE: RGTI - &#36;1.2</li>
                                <li>Q2 revenue &#36;3 million</li>
                            </ul>
                        <br />
                        <li><Link href="https://coldquanta.com/">Infleqtion</Link> - thank you boulder</li>
                        <br />
                        <li><Link href="https://www.dwavesys.com/">D-Wave</Link></li>
                        <ul>
                            <li>NYSE: QBTS - &#36;0.79</li>
                            <li>Q2 revenue &#36;1.8 million</li>
                            <li>Initially raised &#36;300 million in funding</li>
                        </ul>
                        <br />
                        <li><Link href="https://ionq.com/">Ion Q</Link></li>
                            <ul>
                                <li>NYSE: IONQ &#36;12.59</li>
                                <li>Q1 revenue &#36;4.3 million</li>
                                <li>Q2 revenue &#36;5.5 million</li>
                                <li>Initially raised</li>
                            </ul>
                        <li><Link href="https://strangeworks.webflow.io/">Strange works</Link></li>
                        <br />
                        <li><Link href="https://www.quantum-machines.co/">Quantum Machines</Link></li>
                        <br />
                        <li><Link href="https://www.quandela.com/">Quandela</Link></li>
                        <br />
                        <li><Link href="https://alice-bob.com/">Alice and Bob</Link></li>
                        <br />
                        <li><Link href="https://www.meetiqm.com/">IQM</Link></li>
                        <br />
                        <li><Link href="https://multiversecomputing.com/">Multiverse computing</Link></li>
                        <br />
                        <li><Link href="https://zapata.ai/">Zapata computing</Link></li>
                        <br />
                        <li><Link href="https://www.psiquantum.com/">Psi Quantum</Link></li>
                        <br />
                        <li><Link href="https://www.quantinuum.com/">Quantinuum</Link></li>
                        <br />
                        <li><Link href="https://q-ctrl.com/">Q Ctrl</Link></li>
                        <br />
                        <li><Link href="https://www.qcware.com/">QC Ware</Link></li>
                        <br />
                        <li><Link href="https://universalquantum.com/">Universal Quantum</Link></li>
                        <br />
                    </ul>
                    <br />
                    
                    <p> 
                        Some of the top quantum investors are: 
                    <ul>
                        <li><Link href="https://www.aeinvestmentco.com/">AE investments</Link></li>
                    </ul>
                    </p>

                    <br />
                    <br />
            <h2>
                How do you build a quantum computer? 
            </h2>
            <p> 
                The components of a quantum computer are...
            <ol>
                <li>Input&#47;output</li>
            <p>
                We need a way to feed a computer information, and the computer needs a way to display its information to us.
            </p>
                <li>Processor</li>
                <li>Memory</li>
            </ol>
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
                <li><Link href="https://www.quantum.gov/">National quantum initiative</Link></li>
                <br />
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
                <li><Link href="https://www.alibabacloud.com/knowledge/hot/quantum-computing-a-brief-overview" className={style.noUnder}>Alibaba - 阿里巴巴</Link></li>
                <br />
                <li><Link href="https://quantum.baidu.com/">Baidu</Link></li>
                <br />
                <li><Link href="https://originqc.com.cn/en/index.html">Origin Quantum</Link></li>
                <br />
                <li><Link href="https://www.huaweicloud.com/intl/en-us/solution/hiq/">Huawei</Link></li>
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
