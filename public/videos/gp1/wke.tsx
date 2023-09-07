import style from '@/styles/general.module.css';

const WkeVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Work and kinetic energy
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="Work and kinetic energy overview"
                        src={"https://player.vimeo.com/video/820102166?h=9fcece4318&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default WkeVid;