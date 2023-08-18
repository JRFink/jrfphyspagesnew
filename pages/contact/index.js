import { useState } from 'react';
import style from '@/styles/general.module.css';

const Contact = () => {

    // const [yessSubmitted, setSubmitted] = useState(false);

    const handleSubmit = async (note) => {
        note.preventDefault();
        const data = {
            noteData: note.target.feedbackText.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/contactForm'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          }, 
          body: JSONdata,
        }
        await fetch(endpoint, options);
        setSubmitted(true);
    }
    // function ThankYou (isSubmitted) {
    //     console.log("is " + isSubmitted);
    //     if (isSubmitted) {
    //         return <p>Thank you!</p>
    //     } 
    //     return null;

    // }
    return (
        <>
            <h1 className={style.centerText}>
                Contact
            </h1>
            <div className={style.centerIfSmall}>
                <p>
                    Leave a note
                </p>
                <form onSubmit={handleSubmit}>
                    <textarea type="text" id="feedbackText" className={style.feedbackBox} placeholder=" General feedback"/>
                    <br></br>
                    <br></br>
                    <button type="submit" className={style.greenButton}>Submit</button>
                </form>
            </div>
            <br></br>
            {/* <ThankYou /> */}
            <br></br>
            <p>
                Write to us at: 
                <br></br>
                <br></br>
                &nbsp;    P.O. Box 7007 <br></br>
                &nbsp;          Ny, Ny 10150
            </p>
        </>
    );
}

export default Contact;