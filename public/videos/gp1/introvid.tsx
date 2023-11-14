import style from '@/styles/general.module.css';

const IntroVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Intro
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="Intro vid"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/884253420?h=4f4e795c79&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default IntroVid;