import style from '@/styles/general.module.css';

const AccelVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="constant position; constant velocity"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/819700064?h=2fdc25f597&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default AccelVid;