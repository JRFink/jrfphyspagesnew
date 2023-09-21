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
                <p>
                    <a href="https://www.ipho-new.org/documentations/">Physics olympiad </a>problems
                </p>
                <h2>
                    America
                </h2>
                    <p>
                    <Link href="https://www.congress.gov/advanced-search/legislation" className={style.noUnder}>Laws</Link>
                    <br />
                    <br />
                        <Link href="https://www.usa.gov/" className={style.noUnder}>Government</Link>
                                <ul>
                                    <li>
                                        <Link href="https://www.energy.gov/" className={style.noUnder}>Energy</Link>
                                    </li>
                                    <br></br>
                                    <li>
                                        <Link href="https://www.energy.gov/science/office-science" className={style.noUnder}>Science</Link>
                                    </li>
                                    <br></br>
                                    <li>
                                        <Link href="https://www.ed.gov" className={style.noUnder}>Education</Link>
                                    </li>
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
                        <ul>
                            <li>
                                <Link href="http://www.nea.gov.cn" className={style.noUnder}>Energy - 精力</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://en.most.gov.cn" className={style.noUnder}>Science - 科学</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="http://en.moe.gov.cn" className={style.noUnder}>Education - 教育</Link>
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
                        <br></br>
                        <li>
                            <Link href="https://minobrnauki.gov.ru" className={style.noUnder}>Science &#38; Education</Link>
                        </li>
 <li>
                            <Link href="https://svr.gov.ru" className={style.noUnder}>Svr</Link>
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
                        <br></br>
                        <li>
                            <Link href="https://snas.org.sg" className={style.noUnder}>Science</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://www.moe.gov.sg" className={style.noUnder}>Education</Link>
                        </li>
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