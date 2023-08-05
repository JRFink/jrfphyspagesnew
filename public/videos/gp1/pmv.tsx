import style from '@/styles/general.module.css';

const PmvVid = () => {
    return (
        <>
            <div className={style.flexContainer}>
                <iframe
                        title="Momentum, impulse, & collisions overview"
                        src={"https://player.vimeo.com/video/820108407?h=6e6b096791&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default PmvVid;