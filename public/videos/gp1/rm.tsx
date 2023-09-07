import style from '@/styles/general.module.css';

const RotVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Rotational motion
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="Rotational motion overview"
                        src={"https://player.vimeo.com/video/820098711?h=74daf6e3ef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default RotVid;