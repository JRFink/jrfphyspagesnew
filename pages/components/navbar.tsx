import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import profsvg from '@/public/images/profsvg.svg'; 

const Navbar = () => {
    return (
        <>
            <Link href="/auth/myaccount" className={style.moveRight}>
                <Image
                    src={profsvg}
                    style={{
                        width: '4%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A colorful drawing of a cell" 
                    className={style.avatar}
                    
                />
            </Link>
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