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
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Egypt</li>
                    </ul>
                    <li>Africa - south</li> 
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Botswana</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Madagascar</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>South Africa</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Zambia</li>
                    </ul>
                    <li>America - central</li>
                    <ul>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Cuba</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Dominican Republic</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Nicaragua</li>  
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Panama</li>                    </ul>
                    <li>America - north</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Canada</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Mexico</li>
                        <li><Link href="/glob/country/usa" className={style.dropdownLi} onClick={handleDropdownClick}>United States</Link></li>
                    </ul>
                    <li>America - south</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Argentina</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Bolivia</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Brazil</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Columbia</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Peru</li>
                    </ul>
                    <li>Asia</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>China</li>
                        <li><Link href="/glob/country/japan" className={style.dropdownLi} onClick={handleDropdownClick}>Japan</Link></li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>North Korea</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>South Korea</li>
                    </ul>
                    <li>Australia</li>
                    <li>Europe - east</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Albania</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Ukraine</li>
                    </ul>
                    <li>Europe - west</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>England</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Finland</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>France</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Germany</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Norway</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Ireland</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Italy</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Poland</li>
                    </ul>
                    <li className={style.dropdownLi}>Oceania</li>
                    <ul className={style.dropdownLi}>
                        <li onClick={handleDropdownClick}>Fiji</li>
                    </ul>
                    <li className={style.dropdownLi}>Russia</li>
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





