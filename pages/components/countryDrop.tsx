import React, { useState, useRef, useEffect } from 'react'; 
import Link from 'next/link';
import style from '@/styles/general.module.css';

const CountryDrop = () => {
    const [dropdownState, setDropdownState] = useState({ open: false});

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
            Country &#x2228;
            </button>
            <br /> 
            {dropdownState.open && (
            <div className={style.dropdownButtonDiv}> 
                <ul className={style.dropdownUl}>
                    <br /> 
                    <li>Africa - north</li>
                    <ul>
                        <li className={style.dropdownLi}>Egypt</li>
                    </ul>
                    <li>Africa - south</li> 
                    <ul>
                        <li className={style.dropdownLi}>Botswana</li>
                        <li className={style.dropdownLi}>South Africa</li>
                        <li className={style.dropdownLi}>Zambia</li>
                    </ul>
                    <li>America - north</li>
                    <li>America - south</li>
                    <li>Asia</li>
                    <li>Australia</li>
                    <li>Europe - east</li>
                    <li>Europe - west</li>
                    <li>Russia</li>
                </ul> 
            </div> 
            )} 
        </div> 
    ); 
}

export default CountryDrop;
        
            {/* <li>Africa - north</li>
<ul>
    <li>Egypt</li>
</ul>

<li>Africa - south</li>
<ul>
    <li>Botswana</li>
    <li>South Africa</li>
    <li>Zambia</li>
</ul>

<li>America - north</li>
<ul>
    <li>Canada</li>
    <li>Mexico</li>
    <li>United States</li>
</ul>

<li>America - south</li>

<li>Asia</li>
<ul>
    <li>China</li>
    <li>Japan</li>
    <li>North Korea</li>
    <li>South Korea</li>
    <li>Vietnam</li>
</ul>




<li>Europe - east</li>
<ul>
    <li>Albania</li>
</ul>

<li>Europe - west</li>
<ul>
    <li>England</li>
</ul>

<li>Middle east</li>
<ul>
    <li>Dubai</li>
    <li>India</li>
    <li>Saudi Arabia</li>
    <li>UAE</li>
    <li>Qatar</li>
</ul>

<li>Russia</li> */}





