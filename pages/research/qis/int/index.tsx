import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Intnl = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Internation cooperation 
            </h1>
            <p>
                Below you can find some statements on international cooperation in quantum.
            </p>
            <ul>
                <li><Link href="https://www.state.gov/tokyo-statement-on-quantum-cooperation/">Japan</Link></li>
                <br />
                <li><Link href="https://www.state.gov/cooperation-in-quantum-information-sciences-and-technologies-uk">United Kingdom</Link></li>
                <br />
                <li><Link href="https://www.state.gov/cooperation-in-quantum-science-and-technology-aus">Australia</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-and-finland-on-cooperation-in-quantum-information-science-and-technology/">Finland</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-of-america-and-sweden-on-cooperation-in-quantum-information-science-and-technology/">Sweden</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-of-america-and-denmark-on-cooperation-in-quantum-information-science-and-technology/">Denmark</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-of-america-and-switzerland-on-cooperation-in-quantum-information-science-and-technology/">Switzerland</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-of-america-and-france-on-cooperation-in-quantum-information-science-and-technology/">France</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-of-america-and-the-netherlands-on-cooperation-in-quantum-information-science-and-technology/">Netherlands</Link></li>
                <br />
                <li><Link href="https://www.state.gov/joint-statement-of-the-united-states-of-america-and-republic-of-korea-on-cooperation-in-quantum-information-science-and-technologies/">Republic of Korea</Link></li>
                <br />
            </ul>
        </>
    );
}

export default Intnl;
