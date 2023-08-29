import style from '@/styles/general.module.css';

export function Thankyou () {
    return (
        <>
            <p>Thank you. A real human will read this.</p>
        </>
    );
}

function LeaveaNote({ isActive, onShow}) {
    return (
        <>
            {
            isActive ? (
                <>
                    <Contactform />
                    <button onClick={onShow}>
                        Submit 
                    </button>
                </>
                ) : (
                    <Thankyou />
                )
            }
        </>
    );
}

const Contactform = () => {

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
    }

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
                    <button type="submit" className={style.greenButtonCont}>green submit to db</button>
                </form>
            </div>
            <br></br>
            <br></br>
            <p>
                Or write to us at: 
                <br></br>
                <br></br>
                &nbsp;    P.O. Box 7007 <br></br>
                &nbsp;          Ny, Ny 10150
            </p>
        </>
    );
}

export default Contactform;