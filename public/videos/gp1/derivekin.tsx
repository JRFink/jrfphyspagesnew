import style from '@/styles/general.module.css';

const DeriveKinVid = () => {
    return (
        <>
            <h2 className={style.centerText}>
                Deriving a Kinematic Equation
            </h2>
            <div className={style.flexContainerVid}>
                <iframe
                        title="Deriving a Kinematic Equation"
                        src={"https://player.vimeo.com/video/766592416?h=3c5b4f92a9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                        className={style.iframe}
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default DeriveKinVid;