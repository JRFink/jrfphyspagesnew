import style from '@/styles/general.module.css';

const Login = () => {

    return (
        <>
            <h1 className={style.centerText}>
                Login
            </h1>
            <br></br>
            <p className={style.centerText}>
                just testing rn
            </p>
            <br></br>
            <div className={style.centerText}>
                <form>
                    <label><b>Email: </b></label>
                        <input name="email" id="email" type="text" className={style.inputBox} placeholder="email" required></input>
                    <br></br>
                    <br></br>
                    <label><b>Password: </b></label>
                        <input name="password" id="password" type="password" className={style.inputBox} placeholder="&#x2A;&#x2A;&#x2A;&#x2A;nottooeasy&#x2A;&#x2A;&#x2A;&#x2A;" required></input>
                    <br></br>
                    <br></br>
                    <button type="submit" className={style.greenButton}>Login</button>
                </form>
                <br></br>
            </div>
        </>
    );
}

export default Login; 