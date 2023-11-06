import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Original = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/education/hop2" className={style.backtoLink}>History of phys 2</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Original papers in phys
            </h1> 
            <br /> 
            <p>
                <ul>
                    
                    <li>
                        <Link href="/pdf/electrodynamics.pdf">Electrodynamics of moving bodies</Link> by Albert Einstein.
                        <br /> 
                        1905
                    </li>
                    <br />
                    <li>
                        <Link href="/pdf/inertia.pdf">Inertia of a body</Link> by Albert Einstein.
                        <br />
                        1905
                    </li>
                    <br />
                    <li>
                        <Link href="/pdf/quanteigen.pdf">Quantization as an eigenvalue problem</Link> by Erwin Schrodinger.
                        <br />
                        1926
                    </li>
                    <br />
<li>
                        <Link href="/pdf/thomson1897.pdf">On Cathode Rays</Link> by JJ Thomson. 1897.
                    </li>
<br />
<li>
<Link href="/pdf/rutherford1909.pdf">On a Diffuse Reflection of the &#945; Particles</Link> by Geiger, Marsden, and Rutherford. 1909.
                    </li>
<br />
                    <li>
                        <Link href="/pdf/leptons.pdf">Model of leptons</Link> by Steven Weinberg.
                        <br /> 
                        1967
                    </li>
                    <br />
                    <li>
                        <Link href="/pdf/higgs.pdf">Discovery of higgs boson</Link> by CERN.
                        <br /> 
                        2012
                    </li>
                </ul>
            </p>
        </> 
    ); 
} 

export default Original;