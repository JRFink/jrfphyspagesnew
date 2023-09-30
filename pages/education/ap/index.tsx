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
                <br />  
                <br />                 
                    <Link href="/education/ap/ap1alg" className={style.generalLink}>AP Physics 1 - algebra based</Link>                    
                <br />                   
                    <Link href="/education/ap/ap2alg" className={style.generalLink}>AP Physics 2 - algebra based</Link> 
                <br />
                    <Link href="/education/ap/apcmech" className={style.generalLink}>AP Physics C - mechanics</Link> 
                <br />
                    <Link href="/education/ap/apcelec" className={style.generalLink}>AP Physics C - electricity and magnetism</Link>      
            </p>
<br /> 
<Helpful /> 
<br />
        </>
    );
}

export default Ap;