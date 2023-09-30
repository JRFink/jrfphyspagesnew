import Link from 'next/link'; 
import style from '@/styles/general.module.css';

export default function Shqipëria () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="shqipëria">
                Albania - Shqipëria
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

export function America () {
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

export function Argentina () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="argentina">
                Argentina
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Gobierno
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energía
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Ciencia
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacíon
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                    </p>
        </>
    );
}

export function 中國 () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="中國">
                China - 中國
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Government - 政府
                </h3>
                    <p>
                        <Link href="https://www.gov.cn" className={style.noUnder}>Government</Link>
                    </p>
                    <p>
                        China has a one party system, enacted through the <Link href="http://en.npc.gov.cn.cdurl.cn/">NPC</Link>.
                        <br /> 
                        <br />
                        General secretary - Xi Jinping
                        Premier - Li Qiang
                    </p>
                    <br />
                        <Link href="https://english.www.gov.cn/archive/lawsregulations/201911/20/content_WS5ed8856ec6d0b3f0e9499913.html" className={style.noUnder}>Constitution - 1982</Link>
                    <br />
                        <Link href="https://12339.gov.cn" className={style.noUnder}>Mss - 国家安全部</Link>
                    <br />
                <h3 className={style.colorDarkBlue}>
                    Energy - 精力
                </h3>
                    <p>
                        <Link href="http://www.nea.gov.cn" className={style.noUnder}>Energy</Link>
                    </p>
                    <p>
                        In China, the average electricity usage per year per capita is around 30,000 kWh. 
                        <br />
                        That &#39;s about 3,000 kWh / month; and about 100 kWh / day. 
                    </p>
                    <p>
                        Some of the largest electric companies in China are 
                        <ul>
                            <li><Link href="http://www.sgcc.com.cn/">State grid corporation</Link></li>
                        </ul>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Science - 科学
                </h3>
                    <p>
                        <Link href="https://en.most.gov.cn" className={style.noUnder}>Science</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Education - 教育
                </h3>
                    <p>
                        <Link href="http://en.moe.gov.cn" className={style.noUnder}>Education - 教育</Link>
                    </p>
                    <p>
                        Some of the best universities in China are
                        <ul> 
                            <li><Link href="https://www.tsinghua.edu.cn/" className={style.noUnder}>Tsinghua University</Link></li>
                            <li><Link href="https://www.pku.edu.cn/" className={style.noUnder}>Peking University</Link></li>
                            <li><Link href="https://www.zju.edu.cn/mainm.htm" className={style.noUnder}>Zhejiang University</Link></li>
                        </ul> 
                    </p>
                    <br /> 
                    <p>
                        There are about <Link href="http://en.moe.gov.cn/documents/reports/202304/t20230403_1054100.html">15,000</Link> senior high schools in china.
                    </p>
        </>
    )
}

export function Deutschland () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Deutschland
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Government - Regierung
                </h3>
                    <p>
                        <Link href="https://www.bundestag.de/" className={style.noUnder}>Regierung</Link>
                    </p>
                    <p>
                        President - Frank-Walter Steinmeier
                        Chancellor - Olaf Scholz
                    </p>
                    <p>
                        <Link href="https://www.bnd.bund.de" className={style.noUnder}>Bnd</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energy - Energie
                </h3>
                    <p>
                        <Link href="https://www.bundesnetzagentur.de/EN/Home/home_node.html" className={style.noUnder}>Energy - Energie</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Science - Wissenschaft
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacation - Erziehung
                </h3>
                    <p>
                        <Link href="https://www.bmbf.de/bmbf/de/home/home_node.html" className={style.noUnder}>Education - Erziehung</Link>
                    </p>
                    <p>
                        Some of the best colleges in Germany are 
                        <ul>  
                            <li><Link href="https://www.tum.de/">Technical University of Munich</Link></li> 
                            <li><Link href="https://www.lmu.de/de/index.html">Ludwig Maximilian University of Munich</Link></li> 
                            <li><Link href="https://www.uni-heidelberg.de">Heidelberg University</Link></li> 
                        </ul> 
                    </p>
        </>
    );
}

export function भारत () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="भारत">
                India - भारत
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Government
                </h3>
                    <p>
                        <Link href="https://www.india.gov.in" className={style.noUnder}>Government</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energy
                </h3>
                    <p>
                        <Link href="https://mnre.gov.in/" className={style.noUnder}>Energy</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Science
                </h3>
                    <p>
                        <Link href="https://dst.gov.in" className={style.noUnder}>Science</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Education
                </h3>
                    <p>
                        <Link href="https://www.education.gov.in" className={style.noUnder}>Education</Link>
                    </p>
        </>
    );
}

export function  ایران () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Deutschland
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Gobierno
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energía
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Ciencia
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacíon
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                    </p>
        </>
    ); 
}

export function 日本 () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Deutschland
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Gobierno
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energía
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Ciencia
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacíon
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                    </p>
        </>
    ); 
}

export function Россия () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Deutschland
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Gobierno
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energía
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Ciencia
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacíon
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                    </p>
        </>
    ); 
}

export function Singapura () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Deutschland
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Gobierno
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energía
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Ciencia
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacíon
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                    </p>
        </>
    ); 
}

export function Türkiye () {
    return (
        <>
            <h2 className={style.h2SectionColor} id="albania">
                Deutschland
            </h2>
                <h3 className={style.colorDarkBlue}>
                    Laws
                </h3>
                <h3 className={style.colorDarkBlue}>
                    Gobierno
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/" className={style.noUnder}>Gobierno</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Energía
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/economia/energia" className={style.noUnder}>Energía</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Ciencia
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/ciencia" className={style.noUnder}>Ciencia</Link>
                    </p>
                <h3 className={style.colorDarkBlue}>
                    Educacíon
                </h3>
                    <p>
                        <Link href="https://www.argentina.gob.ar/educacion" className={style.noUnder}>Educación</Link>
                    </p>
        </>
    );
}


