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
                Things cost money. Research costs money. Here are some of the financial highlights. 
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
                        Annual report <Link href="/pdf/lanl22.pdf">Los Alamos</Link> - 2022 - &#36;180 million.
                    </li>
                    <br />
                    <li>
                        Annual report <Link href="/pdf/lanl21.pdf">Los Alamos</Link> - 2021 - &#36;170 million.
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
                </ul>
            </p>

        </>
    );
}

export default Fin;