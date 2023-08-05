import style from '@/styles/general.module.css';

const ConstantPosVid = () => {
    return (
        <>
            <div className={style.flexContainer}>
                <iframe
                        title="constant position; constant velocity"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/818955500?h=d7335b7023&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default ConstantPosVid;