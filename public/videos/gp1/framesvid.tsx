import style from '@/styles/general.module.css';

const FramesVid = () => {
    return (
        <>
            {/* <h2 className={style.centerText}>
                Frames
            </h2> 
            <br /> */}
            <div className={style.flexContainerVid}>
                <iframe
                        title="Potential energy and energy conservation overview"
                        src={"https://player.vimeo.com/video/884258630?h=3a35b874ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default FramesVid;