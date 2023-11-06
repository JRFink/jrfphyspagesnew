import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Original = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Original papers in particle physics
            </h1> 
            <br /> 
            <p>
                <ul>
<li>
                        <Link href="/pdf/thomson1897.pdf">On Cathode Rays</Link> by JJ Thomson. 1897.
                    </li>
<br />
<li>
<Link href="/pdf/rutherford1909.pdf">On a Diffuse Reflection of the &#945; Particles</Link> by Geiger, Marsden, and Rutherford. 1909.
                    </li>
<br />
                    <li>
                        <Link href="/pdf/leptons.pdf">Model of leptons</Link> by Steven Weinberg. 1967.
                    </li>
                </ul>
            </p>
        </> 
    ); 
} 

export default Original;