import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import bsphere from '@/public/images/bsphere.svg';
import Helpful from '@/pages/components/helpful';

const QuantI = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Quantum Info & Quantum Computing
                </h1>
                <p>
                    Quantum information studies how atoms store information; 
                    quantum computing studies how to use that information to solve practical problems. 
                    Find some of the research <a href="https://journals.aps.org/prxquantum/">here</a>.      
                </p>
            </div>
            <br></br>
            <br></br>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image            
                    src={bsphere}
                    style={{
                        width: '50%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The bloch sphere on a white background" 
                />
            </div>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default QuantI;