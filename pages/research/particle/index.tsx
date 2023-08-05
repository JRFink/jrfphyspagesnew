import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import sm from '@/public/images/sm.png';
import Helpful from '@/pages/components/helpful';

const Particle = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Particle physics
                </h1>
                <p>
                    Particle physics studies the fundamental constituents of matter. 
                    We describe these fundamental constituents in a model called the Standard Model.
                    The Standard Model is similiar to the Periodic table - 
                    just as the Periodic table categorizes elements by their important properties, the 
                    Standard Model categorizes particles by their important properties: mass, charge, spin, etc. 
                    You can find the latest research <a href="https://journals.aps.org/prd/">here</a>.
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
                    src={sm}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The table of elementary particles" 
                />
            </div>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Particle;