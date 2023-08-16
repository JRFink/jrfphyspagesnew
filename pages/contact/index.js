import style from '@/styles/general.module.css';

const Contact = () => {

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
                    <button type="submit" className={style.greenButton}>Submit</button>
                </form>
            </div>
            <br></br>
            <br></br>
            <p>
                Write to us at 
                <br></br>
                <br></br>
                &nbsp;    P.O. Box 7007 <br></br>
                &nbsp;          Ny, Ny 10150
            </p>
        </>
    );
}

export default Contact;