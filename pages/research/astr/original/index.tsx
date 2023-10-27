import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Original = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/astr" className={style.backtoLink}>Astrophysics</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Original papers in astrophysics
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="/pdf/electrodynamics.pdf">Electrodynamics of moving bodies</Link> by Albert Einstein.
                    </li>
                    <br />
                    <li>
                        <Link href="/pdf/inertia.pdf">Inertia of a body</Link> by Albert Einstein.
                    </li>
                </ul>
            </p>
        </> 
    ); 
} 

export default Original;