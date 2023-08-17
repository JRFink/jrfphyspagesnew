import React, { useState, useRef, useEffect } from 'react'; 
{ /* import AlbFlag from '@/public/images/flags/albania'; */}
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
                    <li className={style.dropdownLi}>Schqiptare</li>
                    <li className={style.dropdownLi}>العربية</li>
                    <li className={style.dropdownLi}>বাংলা</li> 
                    <li className={style.dropdownLi}>中文</li> 
                    <li className={style.dropdownLi}>Hrvatski</li>
                    <li className={style.dropdownLi}>Deutsch</li>
                    <li className={style.dropdownLi}>Nederlands</li>   
                    <li className={style.dropdownLi}>English </li>
                    <li className={style.dropdownLi}>Español</li>
                    <li className={style.dropdownLi}>Finnish</li>
                    <li className={style.dropdownLi}>Français</li>
                    <li className={style.dropdownLi}>עברית</li>
                    <li className={style.dropdownLi}>हिंदी</li>
                    <li className={style.dropdownLi}>Italiano</li>
                    <li className={style.dropdownLi}>日本語</li>
                    <li className={style.dropdownLi}>한국인</li>
                    <li className={style.dropdownLi}>Malayu</li> 
                    <li className={style.dropdownLi}>Монгол хэл</li>
                    <li className={style.dropdownLi}>मराठी</li> 
                    <li className={style.dropdownLi}>فارسی</li>
                    <li className={style.dropdownLi}>Português</li> 
                    <li className={style.dropdownLi}>русский</li>
                    <li className={style.dropdownLi}>Tiếng việt</li>
                    <li className={style.dropdownLi}>Isizulu</li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default CountryDrop;