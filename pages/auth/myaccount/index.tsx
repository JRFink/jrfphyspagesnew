import style from '@/styles/general.module.css';

const Myaccount = () => {

//     endpoint='/api/getDB';

//     options = {
//         method = "GET"
//         headers = {
//             Accept: ""
//         }
//         mode: ""
//         cache: 
//         body = 
//         mode = 
//     };

//     await fetch(endpoint, options).then((response) => {

//     });

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
            <p>
                Your account type is: 
                <ul>
                    <li>Subscribed</li> Or 
                    <li>Not subscribed</li>
                </ul>
            </p>
        </>
    );
}

export default Myaccount;