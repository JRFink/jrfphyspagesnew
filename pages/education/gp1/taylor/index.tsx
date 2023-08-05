import Link from 'next/link';
import TaylorVid from '@/public/videos/gp1/taylor';
import style from '@/styles/general.module.css';
import TaylorEx from '@/pages/exercises/gp1/taylorex';
import Helpful from '@/pages/components/helpful';
import Image from 'next/image';
import pendulum from '@/public/images/pendulum.svg';


const Taylor = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Taylor Expansion
            </h1>
            <br></br>
            <h2>
                1. Intro
            </h2>
            <h2>
                2. Application to physical problems
            </h2>
            <h2>
                3. Further examples
            </h2>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={pendulum}
                    style={{
                        width: '80%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Guy with a blue shirt with trees in the background" 
                />
            </div>
            <br></br>
            <TaylorVid />
            <br></br>
            <br></br>
            <TaylorEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Taylor;