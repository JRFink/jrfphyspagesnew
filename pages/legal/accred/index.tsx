import style from '@/styles/general.module.css';

const Accred = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Accredidations
            </h1>
            <p>
                The <a href="https://www.hlcommission.org/">Higher Learning Commission </a> 
                accredits most colleges and universities in the united states.
            </p>
            <p>
                You can learn more about how the government accredits institutions <a href="https://ope.ed.gov/dapip/#/home">here</a>. 
                &#40;Or doesn&#39;t accredit?&#41;
            </p>
        </>
    );
}

export default Accred;