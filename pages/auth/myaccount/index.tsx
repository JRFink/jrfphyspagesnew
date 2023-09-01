import style from '@/styles/general.module.css';

const Myaccount = () => {
    return (
        <>
            <h1 className={style.centerText}>
                My account
            </h1>
            <br />
            <p>
                Your first name is:
            </p>
            <p>
                Your last name is:
            </p>
            <p>
                Your email is:
            </p>
            <p>
                Your phone number is:
            </p>
        </>
    );
}

export default Myaccount;