import style from '@/styles/general.module.css';

const Introvid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Intro
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="intro video"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/886899452?h=6cf18ec31e&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default Introvid;