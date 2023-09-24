import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import Helpful from '@/pages/components/helpful';

const Gen = () => {
    return (
        <>
            <br />
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br></br>
            <br></br>

                <h1 className={style.centerText}>
                    General research
                </h1>
                <p>
                    This page is a smattering of ideas. 
                </p>
                <h2>
                    America
                </h2>
                    <p>
                    <Link href="https://www.congress.gov/advanced-search/legislation" className={style.noUnder}>Laws</Link>
                    <br />
                    <br />
                        <Link href="https://www.usa.gov/" className={style.noUnder}>Government</Link>
                        <p>
                            There are 3 branches to the american government. They are: <Link href="https://www.congress.gov/">legislative</Link>, 
                            <Link href="https://www.whitehouse.gov/"> executive</Link>, and <Link href="https://www.supremecourt.gov/">judicial</Link>. 
                        </p>
                                <ul>
                                    <li>
                                        <Link href="https://www.energy.gov/" className={style.noUnder}>Energy</Link>
                                    </li>
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
                                    <br></br>
                                    <li>
                                        <Link href="https://www.energy.gov/science/office-science" className={style.noUnder}>Science</Link>
                                    </li>
                                    <br></br>
                                    <li>
                                        <Link href="https://www.ed.gov" className={style.noUnder}>Education</Link>
                                    </li>
                                    <br /> 
                                    <li>
                                        <Link href="https://www.commerce.gov/" className={style.noUnder}>Communication</Link>
                                    </li>
                                    <p>
                                        Some of the largest network providers in the US are 
                                        <ul>
                                            <li><Link href="https://www.verizon.com/">Verizon</Link></li>
                                            <li><Link href="https://www.att.com/">AT&#38;T</Link></li>
                                            <li><Link href="https://www.t-mobile.com/">T Mobile</Link></li>
                                        </ul>
                                    </p>
                                    <br />
                                    <li>
                                        <Link href="https://constitution.congress.gov/constitution/" className={style.noUnder}>Constitution - 1789</Link>
                                    </li>
                                    <br />
                                    <li>
                                        <Link href="https://www.cia.gov" className={style.noUnder}>Cia</Link>
                                    </li>
                                </ul>

                        Google - <ul>
                                    <li>
                                        Larry Page - America - Michigan, Stanford 
                                    </li>
                                    <li>
                                        Sergey Brin - Russia - Maryland, Stanford 
                                    </li>
                                    <li>
                                        Susan Wojcicki - America - Harvard
                                    </li>
                                    <li>
                                        Sundar - India - IIT, Stanford
                                    </li>
                                    <li>
                                        Frederik Pferdt - Germany - Konstanz, Paderborn
                                    </li>
                                </ul> 
                        Apple - <ul>
                                    <li>
                                        Jobs - America - Reed
                                    </li>
                                    <li>
                                        Cook - America - Auburn
                                    </li>
                                </ul>
                        Microsoft - <ul>
                                        <li>
                                            Gates - Seattle - Harvard
                                        </li>
                                        <li>
                                            Nadella - India - Mangalore, Milwaukee
                                        </li>
                                    </ul>
                        Sun - <ul>
                                <li>
                                    Gosling - 1995
                                </li>
                              </ul>
                        Birth control producers - <ul>
                                                    <li>
                                                        Yaz - Bayer - Leverkusen, Germany
                                                    </li>
                                                    <li>
                                                        Ortho-Novum - Johnson &#38; Johnson - New Brunswick, New Jersey 
                                                    </li>
                                                  </ul>
                        First no-fault divorce law - 
                                <ul>
                                    <li>
                                        The <Link href="/pdf/familylawactdivorce.pdf" download>Family Law Act of 1969</Link>, signed by Ronald Regan as governor of California. 
                                    </li>
                                </ul>
                        Drug policy - 
                                <ul>
                                    <li>
                                        <Link href="https://uscode.house.gov/view.xhtml;jsessionid=2C85B8DEBFB1BB15A7D31E29A34C3DAA?req=granuleid%3AUSC-prelim-title21&amp;saved=%7CZ3JhbnVsZWlkOlVTQy1wcmVsaW0tdGl0bGUyMS1zZWN0aW9uODAx%7C%7C%7C0%7Cfalse%7Cprelim&amp;edition=prelim">Controlled substances act</Link>
                                    </li>
                                </ul>
                        Labs - 
                                <ul>
                                    Office of science 
                                    <ul>
                                        <li>
                                            Ames 
                                        </li>
                                        <li>
                                            Argonne 
                                        </li>
                                        <li>
                                            Brookhaven 
                                        </li>
                                        <li>
                                            Fermi
                                        </li>
                                        <li>
                                            Berkeley
                                        </li>
                                        <li>
                                            Oak Ridge
                                        </li>
                                        <li>
                                            Pacific Northwest
                                        </li>
                                        <li>
                                            Princeton Plasma lab
                                        </li>
                                        <li>
                                            Slac
                                        </li>
                                        <li>
                                            Jefferson
                                        </li>
                                    </ul>
                                    Nuc 
                                        <ul>
                                            <li>
                                                Lawrence Livermore
                                            </li>
                                            <li>
                                                Los Alamos
                                            </li>
                                            <li>
                                                Sandia
                                            </li>
                                        </ul>
                                    Energy 
                                        <ul>
                                            <li>
                                                Idaho nat&#39;l lab
                                            </li>
                                            <li>
                                                National energy tech lab
                                            </li>
                                            <li>
                                                Nrel
                                            </li>
                                            <li>
                                                Savannah River
                                            </li>
                                        </ul>
                                </ul>
                    </p>
                <h2> 
                    Albania - Shqipëria
                </h2>
                    <p>
                        <Link href="https://www.kryeministria.al" className={style.noUnder}>Government - qeveria </Link>
                        <ul>
                            <li>
                                <Link href="https://www.infrastruktura.gov.al/" className={style.noUnder}>Energja</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://arsimi.gov.al/" className={style.noUnder}>Science and education - shkenca dhe edukimi</Link>
                            </li>
                        </ul>
                    </p>
                    <br />
                <h2>
                    Argentina
                </h2>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                        <ul>
                            <li>
                                <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                            </li>
                        </ul>
                    </p>
                <br />
                <h2>
                    China - 中國
                </h2>
                    <p>
                        <Link href="https://www.gov.cn" className={style.noUnder}>Government - 政府</Link>
                        <p>
                            China has a one party system, enacted through the <Link href="http://en.npc.gov.cn.cdurl.cn/">NPC</Link>.
                        </p>
                        <ul>
                            <li>
                                <Link href="http://www.nea.gov.cn" className={style.noUnder}>Energy - 精力</Link>
                            </li>
                            <p>
                                In China, the average electricity usage per year per capita is around 30,000 kWh. 
                                <br />
                                That &#39;s about 3,000 kWh / month; and about 100 kWh / day. 
                            </p>
                            <br></br>
                            <li>
                                <Link href="https://en.most.gov.cn" className={style.noUnder}>Science - 科学</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="http://en.moe.gov.cn" className={style.noUnder}>Education - 教育</Link>
                            </li>
                            <p>
                                There are about <Link href="http://en.moe.gov.cn/documents/reports/202304/t20230403_1054100.html">15,000</Link> senior high schools in china.
                            </p>
                            <br />
                                <li>
                                    <Link href="https://english.www.gov.cn/archive/lawsregulations/201911/20/content_WS5ed8856ec6d0b3f0e9499913.html" className={style.noUnder}>Constitution - 1982</Link>
                                </li>
                            <br />
                            <li>
                                <Link href="https://12339.gov.cn" className={style.noUnder}>Mss - 国家安全部</Link>
                            </li>
                        </ul>
                    </p>
                <br /> 
               <h2> 
               Germany - Deutschland 
               </h2>               
               <p>  
                  <Link href="https://www.bundestag.de/" className={style.noUnder}>Government - Regierung</Link>
                    <ul> 
                        <li> 
                            <Link href="https://www.bundesnetzagentur.de/EN/Home/home_node.html" className={style.noUnder}>Energy - Energie</Link> 
                        </li>
                        <br />
                        <li>
                            <Link href="https://www.bmbf.de/bmbf/de/home/home_node.html" className={style.noUnder}>Education - Erziehung</Link>
                        </li>
                        <br />
                        <li>
                            <Link href="https://www.gesetze-im-internet.de/gg/" className={style.noUnder}>Constitution - Grundgesetz - 1949</Link>
                        </li>
                        <br />
                        <li>
                            <Link href="https://www.bnd.bund.de" className={style.noUnder}>Bnd</Link>
                        </li> 
                    </ul>
                </p>
                <br />
                <h2>
                    India - भारत
                </h2>
                    <p>
                        <Link href="https://www.india.gov.in" className={style.noUnder}>Government</Link>
                        <ul>
                            <li>
                                <Link href="https://mnre.gov.in/" className={style.noUnder}>Energy</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://dst.gov.in" className={style.noUnder}>Science</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://www.education.gov.in" className={style.noUnder}>Education</Link>
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
                    <ul>
                        <li>
                            <Link href="http://minenergo.gov.ru" className={style.noUnder}>Energy</Link>
                        </li>
                        <p>
                            In China, the average electricity usage per year per capita is around 60,000 kWh. 
                            <br />
                            That &#39;s about 600 kWh / month; and about 20 kWh / day. 
                        </p>
                        <br></br>
                        <li>
                            <Link href="https://minobrnauki.gov.ru" className={style.noUnder}>Science &#38; Education</Link>
                        </li>
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
                            That &#39;s about 50 kWh / month; and about 2 kWh / day. 
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
                <p>
                    The countries that have the highest electricity usage per capita are Iceland, Norway, and Bahrain. 
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