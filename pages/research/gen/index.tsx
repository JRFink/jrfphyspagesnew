import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import Helpful from '@/pages/components/helpful';

const Gen = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br></br>
            <br></br>

                <h1 className={style.centerText}>
                    General research
                </h1>
                <h2>
                    America
                </h2>
                    <p>
                        <Link href="https://www.usa.gov/">Government</Link>
                                <ul>
                                    <li>
                                        <Link href="https://www.energy.gov/">Energy</Link>
                                    </li>
                                    <br></br>
                                    <li>
                                        <Link href="https://www.energy.gov/science/office-science">Science</Link>
                                    </li>
                                    <br></br>
                                    <li>
                                        <Link href="https://www.ed.gov">Education</Link>
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
                                        The <Link href="/pdf/familylawactdivorce.pdf" download>Family Law Act of 1969</Link>, 
                                        interestingly signed by Ronald Regan as governor of California. 
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
                    China
                </h2>
                    <p>
                        <Link href="https://www.gov.cn">Government</Link>
                        <ul>
                            <li>
                                <Link href="http://www.nea.gov.cn/">Energy</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://en.most.gov.cn/">Science</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="http://en.moe.gov.cn/">Education</Link>
                            </li>
                        </ul>
                    </p>
                <h2>
                    India
                </h2>
                    <p>
                        <Link href="https://www.india.gov.in">Government</Link>
                        <ul>
                            <li>
                                <Link href="https://mnre.gov.in/">Energy</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://dst.gov.in">Science</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://www.education.gov.in">Education</Link>
                            </li>
                        </ul>
                    </p>
                <h2>
                    Iran
                </h2>
                <p>
                    <Link href="https://dolat.ir">Government</Link>
                    <ul>
                        <li>
                            <Link href="https://moe.gov.ir">Energy</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://irangov.ir/cat/558">Science</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://irangov.ir/cat/547">Education</Link>
                        </li>
                    </ul>
                </p>
                <h2>
                    Japan
                </h2>
                    <p>
                        <Link href="https://www.japan.go.jp">Government</Link>
                        <ul>
                            <li>
                                <Link href="https://www.enecho.meti.go.jp">Energy</Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href="https://www.mext.go.jp">Science &#38; Education</Link>
                            </li>
                        </ul>
                    </p>
                <h2>
                    Russia
                </h2>
                <p>
                    <Link href="http://government.ru">Government</Link>
                    <ul>
                        <li>
                            <Link href="http://minenergo.gov.ru">Energy</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://minobrnauki.gov.ru">Science &#38; Education</Link>
                        </li>
                    </ul>
                </p>
                <h2>
                    Singapore
                </h2>
                <p>
                    <Link href="https://www.gov.sg">Government</Link>
                    <ul>
                        <li>
                            <Link href="https://www.ema.gov.sg/index.aspx">Energy</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://snas.org.sg">Science</Link>
                        </li>
                        <br></br>
                        <li>
                            <Link href="https://www.moe.gov.sg/">Education</Link>
                        </li>
                    </ul>
                </p>
                <h2>
                    Other
                </h2>
                <p>
                    <ul>
                        <li>
                            <Link href="https://www.ietf.org/">Internet engineering task force</Link>
                        </li>
                    </ul>
                </p>
        </>
    );
}

export default Gen;