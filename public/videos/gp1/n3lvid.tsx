import style from '@/styles/general.module.css';

const N3lVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Intro vid"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/884415066?h=22b054e832&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default N3lVid;