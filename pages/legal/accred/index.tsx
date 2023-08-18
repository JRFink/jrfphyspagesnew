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
                A list of the main seven federally recognized accrediting agencies can be found <a href="https://www.chea.org/regional-accrediting-organizations">here</a>. 
            </p>
            <p>
                You can learn more about how the government accredits, sorry doesn&#39;t accredit, institutions <a href="https://ope.ed.gov/dapip/#/home">here</a>. 
            </p>
        </>
    );
}

export default Accred;