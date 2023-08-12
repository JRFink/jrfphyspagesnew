import style from '@/styles/general.module.css';

const Contact = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Contact
            </h1>
            <p>
                Leave a note
            </p>
            <input type="text" id="feedbackText" className={style.feedbackBox} placeholder="General feedback"></input>
            <br></br>
            <br></br>
            <button type="submit" className={style.greenButton}>Submit</button>
        </>
    );
}

export default Contact;