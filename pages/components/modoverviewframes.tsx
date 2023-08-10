import style from '@/styles/general.module.css';
import Vidicon from '@/pages/components/icons';
import { Docicon } from '@/pages/components/icons';
import { Pencilicon } from '@/pages/components/icons';

const Modoverview = () => {
    return (
        <>
            <h2 className={style.exerciseHeading}>
                Module Overview
            </h2>
            <br></br>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                Reference frames
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                Units
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                Measurement
            </p>
            <br></br>
            <Docicon />
            <p className={style.inlineContainerSumm}>
                Summary
            </p>
            <br></br>
            <Pencilicon />
            <p className={style.inlineContainer}>
                Exercises
            </p>
            <br></br>
        </>
    );
};

export default Modoverview;