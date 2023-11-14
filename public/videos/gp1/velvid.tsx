import style from '@/styles/general.module.css';

const VelVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Velocity video"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/884264085?h=03ad9d4ca9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default VelVid;