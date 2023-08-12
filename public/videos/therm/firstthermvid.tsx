import style from '@/styles/general.module.css';

const FirstthermVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                First Law of Thermodynamics
            </h2>
            <div className={style.flexContainerVid}>
                <iframe
                        title="First Law of Thermodynamics"
                        src={"https://player.vimeo.com/video/766526792?h=285f78786b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default FirstthermVid;