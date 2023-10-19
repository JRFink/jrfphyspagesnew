import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import profsvg from '@/public/images/profsvg.svg'; 

const Navbar = () => {

    const [dropdownState, setDropdownState] = useState({ open: false });

    const handleDropdownClick = () => {
        setDropdownState({ open: !dropdownState.open });
    }

    const container = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (e: any) => {
        if (container.current && !container.current.contains(e.target)) {
            setDropdownState({ open: false });
        }
    };

    function dropDown () {
        return (
            <p>some test</p>
        )
    }
    return (
        <>
            <Link href="/auth/myaccount" className={style.moveRight} onClick={dropDown}>
                <Image
                    src={profsvg}
                    style={{
                        width: '8%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A white silhouette against a black background" 
                    className={style.avatar}
                    onClick={dropDown}
                    
                />
            </Link>
            {dropdownState.open && (
                <div className={style.dropdownButtonDiv}>
                    <ul className={style.dropdownUl}>
                        <br />
                        <li><Link href="/glob/alb" className={style.dropdownLi} onClick={handleDropdownClick}>Schqiptare</Link></li> 
                        <br />
                    </ul>
                </div> 
            )}

            <div className={style.flexContainer}>
                <Link href="/" className={style.styleNav}>Home</Link>
                <Link href="/education" className={style.styleNav}>Education</Link>
                <Link href="/research" className={style.styleNav}>Research</Link>
               <Link href="/community" className={style.styleNav}>Community</Link>  
                <input type="text" className={style.searchBox} placeholder="Search topic (testing mode)"></input>
                <Link href="/auth/signup" className={style.styleNav}>Sign up</Link>
                <Link href="/members" className={style.styleNav}>Member access</Link>
                {/* <Link href="/tutoring" className={style.styleNav}>Tutoring</Link> */}
            </div>
            <br></br>
        </>
    );
};

export default Navbar;