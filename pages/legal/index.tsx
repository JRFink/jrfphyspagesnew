import Link from 'next/link';
import style from '@/styles/general.module.css';


const Legal = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Legal
            </h1>
            <p>
                The content on this site is subject to copyright. Some images are attributed to creative commons license. 
                Learn more <Link href="https://creativecommons.org/">here</Link>.
            </p>
            <br />
            <h2>
                Annual reports
            </h2>
            <br />
            <h3>
                2023
            </h3>
                <p>
                    ...
                </p>
            <h3>
                2022
            </h3>
                <p>
                    ...
                </p>
            <h2>
                Balance sheets
            </h2>
            <br />
            <h3>
                2023
            </h3>
                <p>
                    ...
                </p>
            <h3>
                2022
            </h3>
                <p>
                    ...
                </p>
            <h2>
                Cash flow statements
            </h2>
            <br />
            <h3>
                2023
            </h3>
                <p>
                    ...
                </p>
            <h3>
                2022
            </h3>
                <p>
                    ...
                </p>
            <h2>
                Income statements
            </h2>
            <br />
            <h3>
                2023
            </h3>
                <p>
                    ...
                </p>
            <h3>
                2022
            </h3>
                <p>
                    ...
                </p>
        </>
    );
}

export default Legal;
