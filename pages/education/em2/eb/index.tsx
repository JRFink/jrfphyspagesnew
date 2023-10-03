import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import emwaves from '@/public/images/emwave.svg';
import EbEx from '@/pages/exercises/em2/ebex';
import Helpful from '@/pages/components/helpful';

const Eb = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electromagnetic Waves
            </h1>
            <div  
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                }} 
            > 
                <Image 
                    src={emwaves} 
                    style={{ 
                        width: '80%', 
                        borderRadius: "20px", 
                        height: 'auto' 
                    }} 
                    sizes="100vw" 
                    alt="Large blue waves mixed with orange smaller circles"  
                /> 
            </div>
            <EbEx />
            <Helpful />
        </>
    );
}

export default Eb;