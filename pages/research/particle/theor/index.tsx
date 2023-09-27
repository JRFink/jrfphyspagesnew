import Link from 'next/link'; 
import Image from 'next/image';
import stmeq from '@/public/images/stmeq.png';
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link>
            <h1 className={style.centerText}>
                Particle theory
            </h1>
            <br />
            <p>
                Below you will find some theories for particle physics. 
            </p>
            <br />
            <p>
                Here is a mathematical formulation of the standard model. 
            </p>
            <br /> 
            <br />
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={stmeq}
                    style={{
                        width: '70%',
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A mathematical formulation of the standard model" 
                />
            </div>
            <p className={style.small}>
                Courtesy to T.D. Gutierrez
            </p>
            
        </>
    );
}

export default Theor;