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
                First name:
            </p>
            <p>
                Last name:
            </p>
            <p>
                Email:
            </p>
            <p>
                Phone number:
            </p>
            <p>
                Account type: 
                <ul>
                    <li>Subscribed</li> Or 
                    <li>Not subscribed</li>
                </ul>
            </p>
        </>
    );
}

export default Myaccount;