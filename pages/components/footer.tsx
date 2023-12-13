import style from '@/styles/general.module.css';
import Link from 'next/link';
import CountryDrop from '@/pages/components/countryDrop';
import LanguageDrop from '@/pages/components/languageDrop';
import AmFlag from '@/public/images/flags/america';

const Footer = () => {


    return (
        <>
            <br></br>
            <br></br>
            <footer className={style.footerDiv}>
                <div className={style.flexContainerFooter}>
                    <div className={style.footerSec1}>
                        <small>
                            <Link href="/research/stand" className={style.linkFooter}>Standards and constants</Link><br></br>
                            <br></br>
                            <Link href="/contact" className={style.linkFooter}>Contact</Link><br></br>
                            <br></br>
                            <Link href="/" className={style.linkFooter}>Home</Link><br></br>
                            <br></br>
                            <Link href="/careers" className={style.linkFooter}>Careers</Link><br></br>
                            <br></br>
                            <Link href="/legal/donor" className={style.linkFooter}>Donors</Link><br></br>
                            
                        </small>
                    </div>
                    <div>
                        <small>
                            <Link href="/about" className={style.linkFooter}>About</Link><br />
                            <br />
                            <Link href="/legal/terms" className={style.linkFooter}>Terms of Service</Link><br></br>
                            <br></br>
                            <Link href="/legal/privacy" className={style.linkFooter}>Privacy Policy</Link><br></br>
                            <br></br>
                            <Link href="/legal/cookie" className={style.linkFooter}>Cookie Policy</Link><br></br>
                            <br></br>
                            <Link href="/legal" className={style.linkFooter}>Legal</Link><br></br>
                            <br></br>
                        </small>
                    </div>
                    <div>
                        <small>
                            <Link href="https://www.nextgenscience.org/" className={style.linkFooter}>Next Gen Science</Link><br></br>
                            <br></br>
                            <Link href="/education/statestd" className={style.linkFooter}>State standards</Link><br></br>
                            <br /> 
                            <Link href="/pdf/scframeworkk12.pdf" className={style.linkFooter}>Framework for K&#45;12 science</Link><br />
                            <br />
                            <Link href="/research/financial" className={style.linkFooter}>Financials of research</Link><br></br>
                            <br /> 
{ /*
                            <CountryDrop /> 
                            <br /> 
                            <br />
                            <LanguageDrop />
                                      
                        <div className={style.footerGenCountry}>
                                <p>
                                    Country
                                </p>
                            </div>
                            <div className={style.footerSpecCountry}>
                                <p>
                                    U.S.
                                </p>
                            </div>
                            &nbsp; &nbsp; 
                            <AmFlag /> 
                        */ }
                        </small>
                    </div>
                </div>
                <br></br>
                        <small>
                            <div className={style.footerGenCountry}>
                                <p>
                                    Country
                                </p>
                            </div>
                            <div className={style.footerSpecCountry}>
                                <p>
                                    U.S.
                                </p>
                            </div>
                        </small>
                            &nbsp; &nbsp; 
                            <AmFlag /> 
                <br></br>
                <small className={style.copyright}>&#169; JRFink LLC {new Date().getFullYear().toString()} </small>
            </footer>
        </>
    );
};

export default Footer;


{/* <div className={style.footerGenCountry}>
                    <p>
                        Country
                    </p>
                </div>
                <div className={style.footerSpecCountry}>
                    <p>
                        U.S.
                    </p>
                </div>
                &nbsp; &nbsp; 
                <AmFlag /> &nbsp;
                <div className={style.makeWhite}>
                    &#x2228;
                </div> */}
