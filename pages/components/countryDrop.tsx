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
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Costa Rica</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Cuba</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Dominican Republic</li>
                   <li className={style.dropdownLi} onClick={handleDropdownClick}>Guatemala</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Honduras</li>
                   <li className={style.dropdownLi} onClick={handleDropdownClick}>Nicaragua</li>  
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Panama</li> 
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>St. Kits</li>                          
                    </ul>
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
                    <li>Asia - central</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>China</li>
                        <li><Link href="/glob/country/japan" className={style.dropdownLi} onClick={handleDropdownClick}>Japan</Link></li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Mongolia</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Nepal</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>North Korea</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>South Korea</li>
                    </ul>
                    <li>Asia - south east</li>
                    <ul>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Indonesia</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Singapore</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Thailand</li>
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
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Greenland</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Norway</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Iceland</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Ireland</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Italy</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Luxembourg</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Portugal</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Sweden</li>                    
                    </ul>
                    <li>Europe - east</li>
                    <ul>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Bosnia</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Estonia</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Greece</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Latvia</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Poland</li>
                        <li className={style.dropdownLi} onClick={handleDropdownClick}>Romania</li>                     </ul>
                    <li>Middle east</li>
                    <ul>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Afganistan</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Iran</li>
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Iraq</li>  
                    <li className={style.dropdownLi} onClick={handleDropdownClick}>Pakistan</li>                      
                    </ul>
                    <li>Oceania</li>
                    <ul>
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
        
   





