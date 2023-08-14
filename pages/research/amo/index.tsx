import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import laser from '@/public/images/laser.jpg';
import Helpful from '@/pages/components/helpful';

const Amo = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div  className={style.centerText}>
                <h1>
                    Atomic, Molecular, & Optical
                </h1>
            </div>
            <p>
                Atomic, molecular, and optical physics studies how light interacts with matter. 
                By studying how light interacts with matter, such as with atoms and molecules, one can study the physical principles governing 
                these objects. You can find some of the latest AMO research <a href="https://journals.aps.org/pra/">here</a>.
                One of the best places to do this research is my alma mater, <a href="https://www.colorado.edu/physics/research/atomic-molecular-and-optical-physics">CU</a>! 
            </p> 
            <p>
                One way that scientists study atoms is by cooling them down. They cool them down with a method called <Link href="/pdf/lasercooling.pdf" target="_blank">laser cooling</Link>.*
            </p>
            <br></br>
            <br></br>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={laser}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Laser with red light" 
                />
            </div>
            <br></br>
            <br></br>
            <Helpful />
            <br></br>
            <br></br>
            <br></br>
            <p className={style.small}>
                * courtesy stanford
            </p>
        </>
    );
}

export default Amo;