import { useState } from 'react';
import SignupForm from '@/pages/components/signupForm';

const Signup = () => {

    const [submitted, setSubmitted] = useState(false);
    /* 

    if (submitted) {
        return (
            <>
                <p>
                    Thank you! We will be in touch.
                </p>
            </>
        )
    }
    return (
        <>
            <SignupForm />
        </>
    )

    */

    return (
        <>
            <SignupForm />
        </>
    );
   
}

export default Signup;