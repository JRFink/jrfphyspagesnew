import Link from 'next/link';
import style from '@/styles/general.module.css';

const Intern = () => {
    return (
        <>
            <h1 className={style.centerText}>
                International
            </h1>
            <br />
            <br />
            <p>
                You can learn about country rankings through the <Link href="https://www.oecd.org/pisa/">OECD</Link>.
            </p>
            <br />
            <p>
                International <Link href="https://www.oecd.org/pisa/test/">PISA</Link> assessment.
            </p>
        </>
    );
}

export default Intern;