import style from '@/styles/general.module.css';

const EUKVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Potential energy and energy conservation
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="Potential energy and energy conservation overview"
                        src={"https://player.vimeo.com/video/819920980?h=9e51c4108c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default EUKVid;