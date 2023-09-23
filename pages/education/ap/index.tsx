import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful';

const Ap = () => {
    return (
        <>
            <br />
            <Link href="/education" className={style.backtoLink}>Education</Link>
            <h1 className={style.centerText}>
                AP Physics &#174;
            </h1>
            <p>
                There are four different AP classes you could take:
                
                <ul>
                <br /> 
                    <li>
                        <Link href="/education/ap/ap1alg" className={style.apText}>AP Physics 1 - algebra based</Link> 
                    </li>
                    <br />
                    <li>
                        <Link href="/education/ap/ap2alg" className={style.apText}>AP Physics 2 - algebra based</Link> 
                    </li>
                    <br />
                    <li>
                        <Link href="/education/ap/apcmech" className={style.apText}>AP Physics C - mechanics</Link> 
                    </li>
                    <br />
                    <li>
                        <Link href="/education/ap/apcelec" className={style.apText}>AP Physics C - electricity and magnetism</Link> 
                    </li>
                </ul>
            </p>
<br /> 
<Helpful /> 
<br />
        </>
    );
}

export default Ap;