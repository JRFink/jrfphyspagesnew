import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Science = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Science
            </h1>
            <br />
            <p>
                Below you will find some info about science around the globe. 
            </p>
            <br />
            <br />
<h2 className={style.h2SectionColor}>
   Bio research  
</h2>
<br /> 
<p> 
    Some of the leading centers for bio research are...
</p>
<ul> 
 <li><Link href="https://www.mit.edu/">MIT</Link></li> 
<br />
 <li><Link href="https://www.tsinghua.edu.cn/">Tsinghua University</Link></li> 
<br />
 <li><Link href="https://www.msu.ru/index.php">Moscow state university</Link></li>
</ul>
<br />
<h2 className={style.h2SectionColor}>
   Chemistry research  
</h2>
<br /> 
<p> 
    Some of the leading centers for chemistry research are...
</p> 
<ul> 
 <li><Link href="https://www.mit.edu/">MIT</Link></li>
<br /> 
 <li><Link href="https://www.tsinghua.edu.cn/">Tsinghua University</Link></li> 
<br />
 <li><Link href="https://www.msu.ru/index.php">Moscow state university</Link></li>
</ul>
<br />
<h2 className={style.h2SectionColor}>
   Physics research  
</h2>
<p> 
    Some of the leading centers for physics research are...
</p>
<ul>
<li><Link href="https://www.mit.edu/">MIT</Link></li>
<br />
<li><Link href="https://www.tsinghua.edu.cn/">Tsinghua University</Link></li>
<br />
<li><Link href="https://www.msu.ru/index.php">Moscow state university</Link></li>
</ul>
            &nbsp; &nbsp; Labs - 
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
        </>
    );
}

export default Science;