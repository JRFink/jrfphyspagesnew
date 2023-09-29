import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Comm = () => {
    return (
        <>
            <br />
                <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Communication
            </h1>
            <br />
            <p>
                Below you will find some info about communication around the globe. 
            </p>
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
            Sun -   <ul>
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
             
            Drug policy - <ul>
                            <li>
                                <Link href="https://uscode.house.gov/view.xhtml;jsessionid=2C85B8DEBFB1BB15A7D31E29A34C3DAA?req=granuleid%3AUSC-prelim-title21&amp;saved=%7CZ3JhbnVsZWlkOlVTQy1wcmVsaW0tdGl0bGUyMS1zZWN0aW9uODAx%7C%7C%7C0%7Cfalse%7Cprelim&amp;edition=prelim">Controlled substances act</Link>
                            </li>
                          </ul>
                                
        </>
    );
}

export default Comm;