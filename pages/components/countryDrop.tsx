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
                <ul className={style.dropdownUl}>
                    <br />
                    <li><Link href="/glob/alb" className={style.dropdownLi} onClick={handleDropdownClick}>Schqiptare</Link></li> 
                    <br />
                    <li><Link href="/glob/arab" className={style.dropdownLi} onClick={handleDropdownClick}>العربية</Link></li>
                    <br />
                    <li><Link href="/glob/beng" className={style.dropdownLi} onClick={handleDropdownClick}>বাংলা</Link></li> 
                    <br />
                    <li><Link href="/glob/cn" className={style.dropdownLi} onClick={handleDropdownClick}>中文</Link></li> 
                    <br />
                    <li><Link href="/glob/croa" className={style.dropdownLi} onClick={handleDropdownClick}>Hrvatski</Link></li>
                    <br />
                    <li><Link href="/glob/deut" className={style.dropdownLi} onClick={handleDropdownClick}>Deutsch</Link></li>
                    <br />
                    <li><Link href="/glob/neth" className={style.dropdownLi} onClick={handleDropdownClick}>Nederlands</Link></li>   
                    <br />
                    <li><Link href="/" className={style.dropdownLi} onClick={handleDropdownClick}>English</Link></li>
                    <br />
                    <li><Link href="/glob/esp" className={style.dropdownLi} onClick={handleDropdownClick}>Español</Link></li>
                    <br />
                    <li><Link href="/glob/suom" className={style.dropdownLi} onClick={handleDropdownClick}>Suomalainen</Link></li>
                    <br />
                    <li><Link href="/glob/fran" className={style.dropdownLi} onClick={handleDropdownClick}>Français</Link></li>
                    <br />
                    <li><Link href="/glob/heb" className={style.dropdownLi} onClick={handleDropdownClick}>עברית</Link></li>
                    <br />
                    <li><Link href="/glob/hind" className={style.dropdownLi} onClick={handleDropdownClick}>हिंदी</Link></li>
                    <br />
                    <li><Link href="/glob/itl" className={style.dropdownLi} onClick={handleDropdownClick}>Italiano</Link></li>
                    <br />
                    <li><Link href="/glob/jap" className={style.dropdownLi} onClick={handleDropdownClick}>日本語</Link></li>
                    <br />
                    <li><Link href="/glob/kor" className={style.dropdownLi} onClick={handleDropdownClick}>한국인</Link></li>
                    <br />
                    <li><Link href="/glob/mal" className={style.dropdownLi} onClick={handleDropdownClick}>Malayu</Link></li>
                    <br /> 
                    <li><Link href="/glob/mar" className={style.dropdownLi} onClick={handleDropdownClick}>मराठी</Link></li> 
                    <br />
                    <li><Link href="/glob/mong" className={style.dropdownLi} onClick={handleDropdownClick}>Монгол</Link></li>
                    <br />
                    <li><Link href="/glob/pers" className={style.dropdownLi} onClick={handleDropdownClick}>فارسی</Link></li> 
                    <br />
                    <li><Link href="/glob/port" className={style.dropdownLi} onClick={handleDropdownClick}>Português</Link></li>
                    <br /> 
                    <li><Link href="/glob/rus" className={style.dropdownLi} onClick={handleDropdownClick}>русский</Link></li>
                    <br />
                    <li><Link href="/glob/viet" className={style.dropdownLi} onClick={handleDropdownClick}>Tiếng việt</Link></li>
                    <br />
                    <li><Link href="/glob/zul" className={style.dropdownLi} onClick={handleDropdownClick}>Isizulu</Link></li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default CountryDrop;