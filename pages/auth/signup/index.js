import { useState } from 'react';
import style from '@/styles/general.module.css';
import Link from 'next/link';
import SignupForm from '@/pages/components/signupForm';

const Signup = () => {

    const [notActivated, setActivated] = useState(true); 
    const [typing, setTyping] = useState(false); 
    const [textButNotSubmitted, setTextButNotSubmitted] = useState(false); 
    const [submitted, setSubmitted] = useState(false);

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
        console.log("1 " + fetch); 
        console.log("2 " + typeof(fetch)); 
        console.log("3 " + fetch()); 
        console.log("4 " + typeof(fetch()));
        await fetch(endpoint, options);
    }

    return (
        <>
            <SignupForm />
        </>
    );
}

export default Signup;