import style from '@/styles/general.module.css';

const SketchIntro = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Topics
            </h2>
            <br />
            <div className={style.flexContainerVid}>
                <iframe
                        title="Intro vid"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/886871479?h=6f31a5f4c0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default SketchIntro;