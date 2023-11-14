
import style from '@/styles/general.module.css';

const NslVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Newton&#39;s second law"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/884400453?h=f8db5820a5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default NslVid;