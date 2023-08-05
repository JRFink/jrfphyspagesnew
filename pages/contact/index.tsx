import style from '@/styles/general.module.css';

const Contact = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Contact
            </h1>
            <p className={style.centerText}>
                <a href="mailto:jeff@jrfink.net">hello</a>
            </p>
        </>
    );
}

export default Contact;