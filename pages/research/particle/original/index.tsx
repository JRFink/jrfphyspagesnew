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
                        <Link href="/pdf/leptons.pdf">Model of Leptons</Link> by Steven Weinberg.
                    </li>
                </ul>
            </p>
        </> 
    ); 
} 

export default Original;