import style from '@/styles/general.module.css';

const AccelVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Acceleration intro
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="acceleration intro"
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