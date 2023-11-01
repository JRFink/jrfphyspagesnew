import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Labs = () => {
    return (
        <>
            <br />
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Labs
            </h1>
            <br />
                        <br />
<p>
                            Find your lab, get prepared, succeed. 
                        <br /> 
                        <input type="text" className={style.searchBox} placeholder="Find your lab (testing...)"></input>
                        </p> 
<br />
            <p>
                <Link href="https://www.anl.gov/">Argonne national lab</Link>
                <ul>
                    <li>Budget ...</li>
                    <li>Director - Paul Kearns</li>
                    <li> 9700 S. Cass Ave
                        <br /> Lemont, IL 60439
                    </li>
                    <li>630 252 2000</li>
                </ul>
                <Link href="https://www.lbl.gov/">Berkeley lab</Link>
                <ul>
                    <li>Budget ...</li>
                    <li>Director - Michael Witherell</li>
                    <li> 1 Cyclotron road
                        <br /> Berkeley, CA 94720
                    </li>
                    <li>510 486 4000</li>
                </ul>
                <Link href="https://www.bnl.gov/world/">Brookhaven national lab</Link>
                <ul>
                    <li>Budget ...</li>
                    <li>Director - JoAnne Hewett</li>
                    <li> PO Box 5000
                        <br /> Upton, NY 11973
                    </li>
                    <li>630 252 2000</li>
                </ul>
                <Link href="https://home.cern/">CERN</Link>
                <ul>
                    <li><Link href="/pdf/cernbudg23.pdf">Budget</Link></li>
                    <li>Director - Gabiola Gianotti</li>
                    <li> Esplanade des Particules 1
                        <br />
                        PO Box 1211  
                        <br /> Geneva 23, Switzerland 
                    </li>
                    <li>41 0 227 676 111</li>
                </ul>
                <Link href="https://fnal.gov">Fermilab</Link>
                <ul>
                    <li><Link href="/pdf/fermibudg23.pdf">Budget</Link> for 2023. 1 billion.</li>
                    <li>Director - Lia Merminga</li>
                    <li>Kirk road and pine street 
                        <br />
                        Batavia, IL 60510
                    </li>
                    <li>630 840 3351</li>
                </ul>
                <Link href="https://www.llnl.gov/">Lawrence Livermore</Link>
                <ul>
                    <li>Budget - </li>
                    <li>Director - Kim Budil</li>
                    <li>7000 East Ave 
                        <br />
                        Livermore, CA 94550
                    </li>
                    <li>925 422 1370</li>
                </ul>
                <Link href="https://www.lanl.gov/">Los alamos</Link>
                <ul>
                    <li><Link href="https://about.lanl.gov/">Budget</Link> for 2022. &#126; 4 billion.</li>
                    <li>Director - Thomas Mason</li>
                    <li>PO Box 1663 
                        <br />
                        Los Alamos, NM 87545
                    </li>
                    <li>505 667 5061</li>
                </ul>
                <Link href="https://www.ornl.gov/">Oak Ridge National Lab</Link>
                <ul>
                    <li>Budget - </li>
                    <li>Director - </li>
                    <li>1 Bethel Valley Rd 
                        <br />
                        Oak Ridge, TN 37830
                    </li>
                    <li>865 576 7658</li>
                </ul>
<Link href="https://www.sandia.gov/">Sandia national labs</Link>
<br />
<br />
               <Link href="https://www6.slac.stanford.edu/">SLAC</Link>
                <ul>
                    <li><Link href="/pdf/slacbudg23.pdf">Budget</Link> &#40;2023&#41; &#36;500 million</li>
                    <li>Director - John Sarrao </li>
                    <li> 2575 Sandhill road 
                        <br />
                        Menlo Park, CA 94025
                    </li>
                    <li>650 926 3300</li>
                </ul>
                
                
                
        </p>
        </>
    );
}

export default Labs;
