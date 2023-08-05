import style from '@/styles/general.module.css';

const IhVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Intro to Quantum
            </h2>
            <br></br>
            <div className={style.flexContainer}>
                <iframe
                        title="Intro to Quantum"
                        src={"https://player.vimeo.com/video/766619864?h=9c146f0eea&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default IhVid;