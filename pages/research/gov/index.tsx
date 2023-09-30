import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import Helpful from '@/pages/components/helpful';

const Gen = () => {
    return (
        <>
            <br />
            <Link href="/consulting" className={style.backtoLink}>Consulting</Link>
            <br></br>
            <br></br>

                <h1 className={style.centerText}>
                    General research
                </h1>
                <p>
                    This page is a smattering of ideas. 
                </p>
                <div className={style.flexContainer} id="intro">
                <Link href="/research/gov/ed" className={style.generalLink}>Education</Link>
                <br />
                <Link href="/research/gov/inf" className={style.generalLink}>Information</Link>
                <br />
                <Link href="/research/gov/energ" className={style.generalLink}>Energy</Link>
                <br />
                <Link href="/research/gov/comm" className={style.generalLink}>Communication</Link>
                <br /> 
                 <Link href="/research/gov/science" className={style.generalLink}>Science</Link>
                <br />
                <Link href="/research/gov/count" className={style.generalLink}>Countries</Link>
                <br />
            </div>

    
                <h2>
                    India - भारत
                </h2>
                    <p>
                        
                        <ul>
                            <li>
                                
                            </li>
                            <br></br>
                            <li>
                                
                            </li>
                            <br></br>
                            <li>
                                
                            </li>
                        </ul>
                    </p>
                <h2>
                    Iran - ایران
                </h2>
                <p>
                    <Link href="https://dolat.ir" className={style.noUnder}>Government</Link>
                    <ul>
                        <li>
                            <Link href="https://moe.gov.ir" className={style.noUnder}>Energy</Link>
                        </li>
                        <p>
                            In Iran, the average electricity usage per year per capita is about 2,000 kWh. 
                            <br />
                            That &#39;s about 200 kWh / month; and about 10 kWh / day. 
                        </p>
                        <br></br>
                        <li>
                            <Link href="https://irangov.ir/cat/558" className={style.noUnder}>Science</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://irangov.ir/cat/547" className={style.noUnder}>Education</Link>
                        </li>
                    </ul>
                </p>
                <h2>
                    Japan - 日本
                </h2>
                    <p>
                        <Link href="https://www.japan.go.jp" className={style.noUnder}>Government</Link>
                        <ul>
                            <li>
                                <Link href="https://www.enecho.meti.go.jp" className={style.noUnder}>Energy</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://www.mext.go.jp" className={style.noUnder}>Science &#38; Education</Link>
                            </li>
                        </ul>
                    </p>
                <h2>
                    Russia - Россия
                </h2>
                <p>
                    <Link href="http://government.ru" className={style.noUnder}>Government - правительство</Link>
                <br /> 
                <br />
                <p> 
                    President - Vladimir Putin 
                    Prime Minister - Mikhail Mishustin
                </p>
                    <ul>
                        <li>
                            <Link href="http://minenergo.gov.ru" className={style.noUnder}>Energy</Link>
                        </li>
                        <p>
                            In Russia, the average electricity usage per year per capita is around 60,000 kWh. 
                            <br />
                            That &#39;s about 600 kWh / month; and about 20 kWh / day. 
                        </p>
                        <br></br>
                        <li>
                            <Link href="https://minobrnauki.gov.ru" className={style.noUnder}>Science &#38; Education</Link>
                        </li>
                        <br /> 
                        <p>Some of the best universities in Russia are 
                        <ul>  
                        <li><Link href="https://www.msu.ru/index.php">Moscow State University</Link></li> 
                        <li><Link href="https://spbu.ru/">St. Petersburg State University</Link></li> 
                        <li><Link href="https://mipt.ru">Moscow Institute of Physics &#38; Technology</Link></li> 
                        </ul> 
                        </p>
                        <br /> 
                        <li>
                            <Link href="http://www.constitution.ru/en/10003000-01.htm" className={style.noUnder}>Constitution - 1993</Link>
                        </li>
                        <br />
                        <li>
                            <Link href="http://svr.gov.ru" className={style.noUnder}>Svr</Link>
                        </li>
                    </ul>
                </p>
                <h2>
                    Singapura 
                </h2>
                <p>
                    <Link href="https://www.gov.sg" className={style.noUnder}>Government</Link>
                    <ul>
                        <li>
                            <Link href="https://www.ema.gov.sg/index.aspx" className={style.noUnder}>Energy</Link>
                        </li>
                        <p>
                            In Singapore, the average electricity usage per year per capita is about 500 kWh. 
                            <br />
                            That&#39;s about 50 kWh / month; and about 2 kWh / day. 
                        </p>
                        <br></br>
                        <li>
                            <Link href="https://snas.org.sg" className={style.noUnder}>Science</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://www.moe.gov.sg" className={style.noUnder}>Education</Link>
                        </li>
                        <br />
                        <li>
                            <Link href="https://sso.agc.gov.sg/Act/CONS1963?ProvIds=P11-#pr1-" className={style.noUnder}>Constitution - 1965</Link>
                        </li>
                        <br></br>
                    </ul>
                </p>
                <h2>
                    Türkiye
                </h2>
                <p>
                    <Link href="https://www.turkiye.gov.tr/" className={style.noUnder}>Government - Hükümet</Link>
                    <ul>
                        <li>
                            <Link href="https://enerji.gov.tr/homepage" className={style.noUnder}>Enerji</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://www.sanayi.gov.tr" className={style.noUnder}>Science - Bilim</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://www.meb.gov.tr/" className={style.noUnder}>Education - Eğitim</Link>
                        </li>
                    </ul>
                </p>                         
                <h2>
                    Other
                </h2>
                <p>
                Behave &#40;size, speed, charge &#40; elec, grav &#41; &#41; ? 
                </p>
                <p> 
                Charge is conserved and invariant; energy is conserved but not invariant; mass is not conserved but invariant? 
                </p>
                <p>
                    <ul>
                        <li>
                            <Link href="https://www.ietf.org/">Internet engineering task force</Link> - Wilmington, DE
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://www.iso.org">International organization for standardization</Link> - Geneva, CH
                        </li>
                    </ul>
                </p>
        </>
    );
}

export default Gen;