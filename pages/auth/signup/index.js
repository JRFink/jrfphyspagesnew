import style from '@/styles/general.module.css';
import Link from 'next/link';

const Signup = () => {

    

    const handleSubmit = async (event) => {

        // state 
        // state = {
        //     test: false,
        // }
        // this.setState({
        //     test: !this.state.test
        // })
        // stop the form from submitting and refreshing the page 
        event.preventDefault() 

        // get data from the form 
        const data = {
            firstname: event.target.firstnamea.value, /* I'm confused as to what actually defines firstname */
            lastname: event.target.lastnameb.value, /* believe first and last are the sql names */
            email: event.target.emaila.value, /* so either a and b will work? emaila or emailb ? */
            phone: event.target.phoneb.value,
            // hashPW: event.target.passworda.value,
            // hashPWRepeat: event.target.passwordrepeatb.value
        }

        // render() {
        //     return (
        //         <div>
        //             { this.state.test && <p>Thank you! We will be in touch.</p> }
        //         </div>
        //     );
        // }

        // send the data to the server in JSON format. 
        const JSONdata = JSON.stringify(data)

        // api endpoint where we send form data 
        const endpoint = '/api/form'

        // form the request for sending data to the server 
        const options = {
            // the method is POST because we are sending data 
            method: 'POST',
            // tell the server we're sending JSON. 
            headers: {
                'Content-Type': 'application/json',
            }, 
            // body of the request is the json data we created above
            body: JSONdata,
        }
        // send the form data to our forms api
        await fetch(endpoint, options);
        <p>hi</p>
    }

    return (
        <>
            <h1 className={style.centerText}>
                Sign Up
            </h1>
            <br></br>
            <p className={style.centerText}>
                Be among the first to know when we launch
            </p>
            <br></br>
            <div className={style.centerText}>
                <form onSubmit={handleSubmit}>
                    <label><b>First name: </b></label>
                        <input name="firstnamea" id="firstnameb" type="text" className={style.inputBox} placeholder="first name" required></input>
                    <br></br>
                    <br></br>
                    <label><b>Last name: </b></label>
                    <input name="lastnamea" id="lastnameb" type="text" className={style.inputBox} placeholder="last name" required>
                    </input>
                    <br></br>
                    <br></br>
                    <label><b>Email: </b></label>
                    <input name="emaila" id="emailb" type="text" className={style.inputBox} placeholder="email no junk" required>
                    </input>
                    <br></br>
                    <br></br>
                    <label><b>Phone: </b></label>
                    <input name="phonea" id="phoneb" type="tel" className={style.inputBox} placeholder="303-867-5309" required>
                    </input>
                    <br></br>
                    {/* <br></br>
                    <label><b>Password: </b></label>
                    <input name="passworda" id="passwordb" type="password" className={style.inputBox} placeholder="*********" required>
                    </input>
                    <br></br>
                    <br></br>
                    <label><b>Repeat password: </b></label>
                    <input name="passwordrepeata" id="passwordrepeatb" type="password" className={style.inputBox} placeholder="repeat&#x2A;&#x2A;&#x2A;&#x2A;&#x2A;&#x2A;&#x2A;"  required>
                    </input> */}
                    <br></br>
                    <p>By signing up you agree to our <Link href="/legal/terms">Terms</Link> and <Link href="/legal/privacy">Privacy Policy</Link></p>
                    <br></br>
                    <button type="submit" className={style.greenButton}>Sign Up</button>
                </form>
                <br></br>
            </div>
        </>
    );
}

export default Signup;