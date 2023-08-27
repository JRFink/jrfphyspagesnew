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
        </>
    );
}

export default Legal;
