import style from '@/styles/general.module.css';

const VelVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Velocity video"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/884261957?h=d55b075d83&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}     
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default VelVid;