import Link from 'next/link';
import style from '@/styles/general.module.css';

const Navbar = () => {
    return (
        <>
            <div className={style.flexContainer}>
                <Link href="/" className={style.styleNav}>Home</Link>
                <Link href="/education" className={style.styleNav}>Education</Link>
                <Link href="/research" className={style.styleNav}>Research</Link>  
                <input type="text" className={style.searchBox} placeholder="Search topic"></input>
                <Link href="/auth/login" className={style.styleNav}>Login</Link>
                <Link href="/auth/signup" className={style.styleNav}>Sign Up</Link>
            </div>
            <br></br>
        </>
    );
};

export default Navbar;