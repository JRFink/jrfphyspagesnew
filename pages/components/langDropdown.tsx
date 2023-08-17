import React, { useState, useRef, useEffect } from 'react'; 

import style from '@/styles/general.module.css'; 

const LanguageDropd = () => {

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
                    <li className={style.dropdownLi}>中文</li> 
                    <li className={style.dropdownLi}>Croatian</li>
                    <li className={style.dropdownLi}>Deutsch</li>   
                    <li className={style.dropdownLi}>English</li>
                    <li className={style.dropdownLi}>Finnish</li>
                    <li className={style.dropdownLi}>Français</li> 
                    <li className={style.dropdownLi}>हिंदी</li>
                    <li className={style.dropdownLi}>Italiano</li>
                    <li className={style.dropdownLi}>日本語</li>
                    <li className={style.dropdownLi}>Malayu</li> 
                    <li className={style.dropdownLi}>Mongolian</li> 
                    <li className={style.dropdownLi}>русский</li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default LanguageDropd;