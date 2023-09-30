import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import Helpful from '@/pages/components/helpful';

const Gen = () => {
    return (
        <>
            <br />
            <Link href="/consulting" className={style.backtoLink}>Consulting</Link>
            <br></br>
            <br></br>

                <h1 className={style.centerText}>
                    General research
                </h1>
                <p>
                    This page is a smattering of ideas. 
                </p>
                <br /> 
                <br />
                <div className={style.flexContainer} id="intro">
                <Link href="/research/gov/ed" className={style.generalLink}>Education</Link>
                <br />
                <Link href="/research/gov/info" className={style.generalLink}>Information</Link>
                <br />
                <Link href="/research/gov/energ" className={style.generalLink}>Energy</Link>
                <br />
                <Link href="/research/gov/comm" className={style.generalLink}>Communication</Link>
                <br /> 
                 <Link href="/research/gov/science" className={style.generalLink}>Science</Link>
                <br />
                <Link href="/research/gov/count" className={style.generalLink}>Countries</Link>
                <br />
            </div>                       
                
                
        </>
    );
}

export default Gen;