import style from '@/styles/general.module.css';

const NflVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Newton&#39;s first law"
                        className={style.iframe}
                        src={"https://player.vimeo.com/video/884391693?h=7247889f9a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default NflVid;