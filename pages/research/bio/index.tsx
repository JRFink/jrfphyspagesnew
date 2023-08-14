import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cell from '@/public/images/cell.svg';
import Helpful from '@/pages/components/helpful';

const Bio = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Biophysics
                </h1>
            </div>
            <p>
                Biophysics studies biological processes from a physical standpoint. 
                For example, biophysics studies soft materials and the reasons
                they are different from rigid materials. Find some of the 
                <a href="https://journals.aps.org/pre/"> research</a> here.
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
                    src={cell}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A colorful drawing of a cell" 
                />
            </div>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Bio;