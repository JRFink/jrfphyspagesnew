import React, { useState, useRef, useEffect } from 'react'; 
import Link from 'next/link';
import style from '@/styles/general.module.css'; 

const LanguageDrop = () => {

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
                    <li><Link href="/glob/lang/alb" className={style.dropdownLi} onClick={handleDropdownClick}>Schqiptare</Link></li> 
                    <br />
                    <li><Link href="/glob/lang/arab" className={style.dropdownLi} onClick={handleDropdownClick}>العربية</Link></li>
                    <br />
                    <li><Link href="/glob/lang/beng" className={style.dropdownLi} onClick={handleDropdownClick}>বাংলা</Link></li> 
                    <br />
                    <li><Link href="/glob/lang/cn" className={style.dropdownLi} onClick={handleDropdownClick}>中文</Link></li> 
                    <br />
                    <li><Link href="/glob/lang/croa" className={style.dropdownLi} onClick={handleDropdownClick}>Hrvatski</Link></li>
                    <br />
                    <li><Link href="/glob/lang/deut" className={style.dropdownLi} onClick={handleDropdownClick}>Deutsch</Link></li>
                    <br />
                    <li><Link href="/glob/lang/neth" className={style.dropdownLi} onClick={handleDropdownClick}>Nederlands</Link></li>   
                    <br />
                    <li><Link href="/" className={style.dropdownLi} onClick={handleDropdownClick}>English</Link></li>
                    <br />
                    <li><Link href="/glob/lang/esp" className={style.dropdownLi} onClick={handleDropdownClick}>Español</Link></li>
                    <br />
                    <li><Link href="/glob/lang/suom" className={style.dropdownLi} onClick={handleDropdownClick}>Suomalainen</Link></li>
                    <br />
                    <li><Link href="/glob/lang/fran" className={style.dropdownLi} onClick={handleDropdownClick}>Français</Link></li>
                    <br />
                    <li><Link href="/glob/lang/heb" className={style.dropdownLi} onClick={handleDropdownClick}>עברית</Link></li>
                    <br />
                    <li><Link href="/glob/lang/hind" className={style.dropdownLi} onClick={handleDropdownClick}>हिंदी</Link></li>
                    <br />
                    <li><Link href="/glob/lang/ind" className={style.dropdownLi} onClick={handleDropdownClick}>Indonesia</Link></li>
                    <br />
                    <li><Link href="/glob/lang/itl" className={style.dropdownLi} onClick={handleDropdownClick}>Italiano</Link></li>
                    <br />
                    <li><Link href="/glob/lang/jap" className={style.dropdownLi} onClick={handleDropdownClick}>日本語</Link></li>
                    <br />
                    <li><Link href="/glob/lang/kor" className={style.dropdownLi} onClick={handleDropdownClick}>한국인</Link></li>
                    <br />
                    <li><Link href="/glob/lang/mal" className={style.dropdownLi} onClick={handleDropdownClick}>Malayu</Link></li>
                    <br /> 
                    <li><Link href="/glob/lang/mar" className={style.dropdownLi} onClick={handleDropdownClick}>मराठी</Link></li> 
                    <br />
                    <li><Link href="/glob/lang/mong" className={style.dropdownLi} onClick={handleDropdownClick}>Монгол</Link></li>
                    <br />
                    <li><Link href="/glob/lang/pers" className={style.dropdownLi} onClick={handleDropdownClick}>فارسی</Link></li> 
                    <br />
                    <li><Link href="/glob/lang/port" className={style.dropdownLi} onClick={handleDropdownClick}>Português</Link></li>
                    <br /> 
                    <li><Link href="/glob/lang/rus" className={style.dropdownLi} onClick={handleDropdownClick}>русский</Link></li>
                    <br />
                    <li><Link href="/glob/lang/viet" className={style.dropdownLi} onClick={handleDropdownClick}>Tiếng việt</Link></li>
                    <br />
                    <li><Link href="/glob/lang/turk" className={style.dropdownLi} onClick={handleDropdownClick}>Türk</Link></li>
                    <br />
                    <li><Link href="/glob/lang/zul" className={style.dropdownLi} onClick={handleDropdownClick}>Isizulu</Link></li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default LanguageDrop;