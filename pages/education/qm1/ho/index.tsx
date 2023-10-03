import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import harmosc from '@/public/images/harmosc.svg';
import HoEx from '@/pages/exercises/qm1/hoex';
import Helpful from '@/pages/components/helpful';

const Ho = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Harmonic Oscillator 
            </h1>
            <br />
            <div  
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                }} 
            > 
                <Image 
                    src={harmosc} 
                    style={{ 
                        width: '80%', 
                        borderRadius: "20px", 
                        height: 'auto' 
                    }} 
                    sizes="100vw" 
                    alt="A blue block attached to a black spring attached to a wall"  
                /> 
                <br />
             </div>
            <HoEx />
            <Helpful />
        </>
    );
}

export default Ho;