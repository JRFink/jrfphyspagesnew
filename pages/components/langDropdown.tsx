import React, { useState } from 'react'; 

import style from '@/styles/general.module.css'; 

const LanguageDropd = () => {

    const [dropdownState, setDropdownState] = useState({ open: false }); 

    const handleDropdownClick = () => {
        setDropdownState({ open: !dropdownState.open });
    }

    return (
        <div className={style.dropdownContainer}>
            <button 
                    type="button" 
                    className={style.dropdownButton}
                    onClick={handleDropdownClick}
                >
                Language
            </button>
            {dropdownState.open && (
            <div className={style.dropdownButton}>
                <ul className={style.dropdownUl}>
                    <li className={style.dropdownLi}>English</li>
                    <li className={style.dropdownLi}>Chinese</li>
                    <li className={style.dropdownLi}>Hindi</li>
                    <li className={style.dropdownLi}>Russian</li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default LanguageDropd;