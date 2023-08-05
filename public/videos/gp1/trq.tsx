import style from '@/styles/general.module.css';

const TrqVid = () => {
    return (
        <>
            <div className={style.flexContainer}>
                <iframe
                        title="Dynamics of rotational motion overview"
                        src={"https://player.vimeo.com/video/820010494?h=4d85d2d6a9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default TrqVid;