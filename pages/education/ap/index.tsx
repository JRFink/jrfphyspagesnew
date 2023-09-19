import Link from 'next/link';
import style from '@/styles/general.module.css';

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
                        <Link href="/education/ap/ap1alg">AP Physics 1 - algebra based</Link> 
                    </li>
                    <br />
                    <li>
                        <Link href="/education/ap/ap2alg">AP Physics 2 - algebra based</Link> 
                    </li>
                    <br />
                    <li>
                        <Link href="/education/ap/apcmech">AP Physics C - mechanics</Link> 
                    </li>
                    <br />
                    <li>
                        <Link href="/education/ap/apcelec">AP Physics C - electricity and magnetism</Link> 
                    </li>
                </ul>
            </p>
        </>
    );
}

export default Ap;