import style from '@/styles/general.module.css';

const TaylorVid = () => {
    return (
        <>
            <div className={style.flexContainer}>
                <iframe
                        title="Taylor expansion overview"
                        src={"https://player.vimeo.com/video/820114455?h=a695a4ad5a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default TaylorVid;