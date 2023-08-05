import style from '@/styles/general.module.css';

const UnitsVid = () => {
    return (
        <>
            <div className={style.flexContainer}>
                <iframe
                        title="Units, Coordinates, Vectors"
                        src={"https://player.vimeo.com/video/818556633?h=7fc0a1f1ce&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default UnitsVid;