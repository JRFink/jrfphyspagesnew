import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Books = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Books for particle physics
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="https://read.amazon.com/kp/embed?asin=B08R2BZ4MX&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_YQVD6X7J3BW6MMW2VKHK">Intro to elementary particles</Link> by Griffiths
                    </li>
                    <br />
                    <li>
                        <Link href="https://read.amazon.com/kp/embed?asin=B005R9EAX2&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_VDE3YHM005WY8FWTZ16Y">Elementary particles in a nutshell</Link> by Christopher Tully
                    </li>
                    <br />
                    <li>
                        <Link href="https://read.amazon.com/kp/embed?asin=B00AKE1VYA&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_HQ4ZZDXBJTKEZAASBEFV">Experimental foundations of particle physics</Link> by Cahn and Goldhaber
                    </li>
                </ul>
            </p>
            
        </> 
    ); 
} 
  
 export default Books;