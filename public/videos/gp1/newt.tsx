import style from '@/styles/general.module.css';

const NewtVid = () => {
    return (
        <>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Newton&apos;s Laws Overview"
                        src={"https://player.vimeo.com/video/819936176?h=dde4b7935a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default NewtVid;