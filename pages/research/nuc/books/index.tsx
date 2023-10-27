import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Books = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear physics</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Books for nuclear physics
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="https://a.co/d/3jsPw9I">Fundamentals in nuclear physics</Link> by Jean-Louis Basdevant
                    </li>
                    <br />
                    <li>
                        <Link href="https://read.amazon.com/kp/embed?asin=B005AUSHMS&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_MD5APP1ZJCYE4ZG7J22W">Nuclear physics in a nutshell</Link> by Carlos Bertulani
                    </li>
                </ul>
            </p>
            
        </> 
    ); 
} 
  
 export default Books;