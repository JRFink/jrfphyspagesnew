import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Diss = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Original papers in AMO
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="/pdf/quanteigen.pdf">Quantization as an eigenvalue problem</Link> by Erwin Schrodinger.
                    </li>
                </ul>
            </p>
        </> 
    ); 
} 

export default Diss;
