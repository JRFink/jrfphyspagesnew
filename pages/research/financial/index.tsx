import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Fin = () => {
    return (
        <>
            <br />
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Financials
            </h1>
            <br />
            <p>
                Things cost money. Research costs money. Here is the <Link href="/pdf/usabudg23.pdf"> 2023 fed government budget</Link>, department of science and energy on pg. 61.
            </p>
            <p>
                Here are some of the financial highlights. 
            </p>
                <ul>
                    <li>
                        USA <Link href="/pdf/usadoe23.pdf">Department of energy budget 2023</Link> - &#36;50 billion.
                    </li>
                    <br />
                    <li>
                        Annual report <Link href="/pdf/cernannual22.pdf">CERN</Link> - 2022.
                    </li>
                    <br />
                    <li>
                        Annual report <Link href="/pdf/cernannual21.pdf">CERN</Link> - 2021.
                    </li>
                    <br />
                    <li>
                        Economics of <Link href="/pdf/fermlab2019.pdf">Fermilab</Link> - 2019.
                    </li>
                    <br />
                    <li>
                        <Link href="/pdf/ucb23.pdf">CU Boulder</Link> - 2023 - &#36;680 million.
                    </li>
                        <ul>
                            <li>Source of funding - 71&#37; federal &#40;NASA, NSF, commerce, ...&#41;</li>
                        </ul>
                    <li>
                        <Link href="/pdf/ucb22.pdf">CU Boulder</Link> - 2022 - &#36;660 million.
                    </li>
                        <ul>
                            <li>Source of funding - 72&#37; federal &#40;NASA, NSF, commerce, ...&#41;</li>
                        </ul>
                    <li>
                        <Link href="/pdf/harvard-fy23.pdf">Harvard</Link> - 2023.
                    </li>
                    <li>
                        <Link href="/pdf/mit-fy23.pdf">MIT</Link> - 2023.
                    </li>
                    <li>
                        <Link href="/pdf/stanford-fy23.pdf">Stanford</Link> - 2023.
                    </li>
                    <li>
                        <Link href="/pdf/berkeley-fy22.pdf">Berkeley</Link> - 2022.
                    </li>
                </ul>
                <p>
                    Have comments&#47;questions about the budget? Here is some contact info&#58;
                <ul>
                    <li>
                    Chairman - <Link href="https://arrington.house.gov/">Jody Arrington</Link>
                    <ul>
                            <li>202 225 4005</li>
                    </ul>
                    </li>
                <li>
                    Ranking member - <Link href="https://boyle.house.gov/">Brendan Boyle</Link>
                    <ul>
                            <li>202 225 0611</li>
                    </ul>
                    </li>
                    
                </ul>
                </p>

        </>
    );
}

export default Fin;