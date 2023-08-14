import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cosm from '@/public/images/cosm.jpg';
import Helpful from '@/pages/components/helpful';

const Astr = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Astrophysics
                </h1>
            </div>
            <p>
                Astrophysics studies the universe beyond earth. Some of the areas are planetary science, cosmology, and exoplanets. 
                Find some of the latest research <a href="https://journals.aps.org/prresearch/subjects/astrophysics">here</a>.  
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
                    src={cosm}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A galaxy on a dark background" 
                />
            </div>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Astr;