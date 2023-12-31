import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Books = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Books for AMO 
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="https://read.amazon.com/kp/embed?asin=B00CDGSFSS&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_JZR93J3A0VEV159XP1NN">Atomic Physics</Link> by Max Born
                    </li>
                    <br />
                    <li>
                        <Link href="https://a.co/d/8IAjZ0y">Theoretical Atomic Physics</Link> by Harald Friedrich
                    </li>
                </ul>
            </p>
            
        </> 
    ); 
} 
  
 export default Books;