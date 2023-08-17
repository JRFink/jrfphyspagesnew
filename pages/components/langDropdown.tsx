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
                    <li className={style.dropdownLi}>English</li>
                    <li className={style.dropdownLi}>Chinese</li>
                    <li className={style.dropdownLi}>Hindi</li>
                    <li className={style.dropdownLi}>Italian</li>
                    <li className={style.dropdownLi}>Japanese</li>
                    <li className={style.dropdownLi}>Mongolian</li> 
                    <li className={style.dropdownLi}>Russian</li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default LanguageDropd;