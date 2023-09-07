import style from '@/styles/general.module.css';

const Two3Vid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Motion in 2-3 dimensions
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="Motion in 2-3 dimensions overview"
                        src={"https://player.vimeo.com/video/819928977?h=ed57c08544&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default Two3Vid;