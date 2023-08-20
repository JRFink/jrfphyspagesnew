import React, { useState, useRef, useEffect } from 'react'; 
{ /* import AlbFlag from '@/public/images/flags/albania'; */}
import Link from 'next/link';
import AmFlag from '@/public/images/flags/america';


import style from '@/styles/general.module.css'; 

const CountryDrop = () => {

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

    return (
        <div className={style.dropdownContainer} ref={container}>
            <button 
                    type="button" 
                    className={style.dropdownButton}
                    onClick={handleDropdownClick}
                >
                Language &#x2228;
            </button>
            
            <br />
            {dropdownState.open && (
            <div className={style.dropdownButtonDiv}>
                <p className={style.dropdownButtonDivP}>just testing</p>
                <ul className={style.dropdownUl}>
                    <li><Link href="/glob/alb" className={style.dropdownLi}>Schqiptare</Link></li> {/* albanian */}
                    <li><Link href="/glob/arab" className={style.dropdownLi}>العربية</Link></li>
                    <li><Link href="/glob/beng" className={style.dropdownLi}>বাংলা</Link></li> 
                    <li><Link href="/glob/cn" className={style.dropdownLi}>中文</Link></li> 
                    <li><Link href="/glob/cn" className={style.dropdownLi}>Hrvatski</Link></li>
                    <li><Link href="/glob/deut" className={style.dropdownLi}>Deutsch</Link></li>
                    <li><Link href="/glob/neth" className={style.dropdownLi}>Nederlands</Link></li>   
                    <li><Link href="/" className={style.dropdownLi}>English</Link></li>
                    <li><Link href="/glob/esp" className={style.dropdownLi}>Español</Link></li>
                    <li><Link href="/glob/suom" className={style.dropdownLi}>Suomalainen</Link></li> { /* fin */}
                    <li><Link href="/glob/fran" className={style.dropdownLi}>Français</Link></li>
                    <li><Link href="/glob/heb" className={style.dropdownLi}>עברית</Link></li>
                    <li><Link href="/glob/hind" className={style.dropdownLi}>हिंदी</Link></li>
                    <li><Link href="/glob/itl" className={style.dropdownLi}>Italiano</Link></li>
                    <li><Link href="/glob/jap" className={style.dropdownLi}>日本語</Link></li>
                    <li><Link href="/glob/kor" className={style.dropdownLi}>한국인</Link></li>
                    <li><Link href="/glob/mal" className={style.dropdownLi}>Malayu</Link></li> 
                    <li><Link href="/glob/mar" className={style.dropdownLi}>मराठी</Link></li> 
                    <li><Link href="/glob/mong" className={style.dropdownLi}>Монгол хэл</Link></li>
                    <li><Link href="/glob/pers" className={style.dropdownLi}>فارسی</Link></li>
                    <li><Link href="/glob/port" className={style.dropdownLi}>Português</Link></li> 
                    <li><Link href="/glob/rus" className={style.dropdownLi}>русский</Link></li>
                    <li><Link href="/glob/viet" className={style.dropdownLi}>Tiếng việt</Link></li>
                    <li><Link href="/glob/zul" className={style.dropdownLi}>Isizulu</Link></li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default CountryDrop;