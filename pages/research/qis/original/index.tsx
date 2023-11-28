import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Original = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/qis" className={style.backtoLink}>Quantum Information</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Original papers in quantum info
            </h1> 
            <br /> 
            <p>

            </p>
        </> 
    ); 
} 

export default Original;