import Link from 'next/link'; 
import style from '@/styles/general.module.css';

export default function America () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="america">
                America
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                    <p>
                        <Link href="https://www.congress.gov/advanced-search/legislation">Laws</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Government
                </h3>
                    <p>
                        <Link href="https://www.usa.gov/">Government</Link>
                    </p> 
                    <p>
                        There are 3 branches to the american government. They are: <Link href="https://www.congress.gov/">legislative</Link>, 
                        <Link href="https://www.whitehouse.gov/"> executive</Link>, and <Link href="https://www.supremecourt.gov/">judicial</Link>. 
                        <br />
                        <br />
                        President - Joe Biden. 
                        Vice pres - Kamala Harris 
                        <br />
                        <br />
                        <Link href="https://constitution.congress.gov/constitution/" className={style.noUnder}>Constitution - 1789</Link>
                        <br />
                        <br />
                        <Link href="https://www.cia.gov" className={style.noUnder}>Cia</Link>
                    </p>
                    <h3 className={style.colorDarkBlue}>
                        Energy
                    </h3>
                        <p>
                            <Link href="https://www.energy.gov/" className={style.noUnder}>Energy</Link>
                        </p>
                        <p>
                            In America, the average electricity usage per year per household is about 10,000 kWh. 
                            <br />
                            That &#39;s about 1,000 kWh / month; and about 30 kWh / day. 
                        </p>
                        <p>
                            Some of the largest utility companies are 
                            <ul>
                                <li><Link href="https://www.nexteraenergy.com/">NextEra</Link></li>
                                <li><Link href="https://www.duke-energy.com/home">Duke energy</Link></li>
                                <li><Link href="https://www.pge.com/?ref=bbbsite">Pacific gas and electric</Link></li>
                            </ul>
                        </p>
                        <br />
                    <h3 className={style.colorDarkBlue}>
                        Science
                    </h3>
                        <p>
                            <Link href="https://www.energy.gov/science/office-science" className={style.noUnder}>Science</Link>
                        </p>        
                    <h3 className={style.colorDarkBlue}>
                        Education
                    </h3>
                        <p>
                            <Link href="https://www.ed.gov">Education</Link>
                        </p>
                        <br /> 
                            <p>
                                Some of the best colleges in America are
                                <ul> 
                                    <li><Link href="https://www.harvard.edu/">Harvard</Link></li>
                                    <li><Link href="https://www.mit.edu/">MIT</Link></li>
                                    <li><Link href="https://www.stanford.edu/">Stanford</Link></li>
                                </ul>
                            </p>
                        <br />
                    <h3 className={style.colorDarkBlue}>
                        Communication
                    </h3>
                        <p>
                            <Link href="https://www.commerce.gov/" className={style.noUnder}>Communication</Link>
                        </p>
                        <p>
                            Some of the largest network providers in the US are 
                            <ul>
                                <li><Link href="https://www.verizon.com/">Verizon</Link></li>
                                <li><Link href="https://www.att.com/">AT&#38;T</Link></li>
                                <li><Link href="https://www.t-mobile.com/">T Mobile</Link></li>
                            </ul>
                        </p>
                        <br />
                        <br />
        </>
    );
}

export function Albania () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Albania
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Goverment
                </h3>
                    <p>
                        <Link href="https://www.kryeministria.al">Government - qeveria </Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energja
                </h3>
                    <p>
                        <Link href="https://www.infrastruktura.gov.al/">Energja</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Science and education - shkenca dhe edukimi
                </h3>
                    <p>
                        <Link href="https://arsimi.gov.al/"></Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Communication
                </h3>
        </>
    );
}