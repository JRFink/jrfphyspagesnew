import style from '@/styles/general.module.css';
import Vidicon from '@/pages/components/icons';
import { Docicon } from '@/pages/components/icons';
import { Pencilicon } from '@/pages/components/icons';

export default function Modoverview () {
    return (
        <>
            <h2 className={style.exerciseHeading}>
                Module Overview
            </h2>
            <br></br>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#frames">Reference frames</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#units">Units</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#measurement">Measurement</a>
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
            <br></br>
            <br></br>
        </>
    );
};

export function ModoverviewVec() {
    return (
        <>
            <h2 className={style.exerciseHeading}>
                Module Overview
            </h2>
            <br></br>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#def">Defining vectors</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#phys">Vectors and physics</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#add">Adding and subtracting vectors</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#mult">Multiplying vectors</a>
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
            <br></br>
            <br></br>
        </>
    );
};

export function ModoverviewCalc() {
    return (
        <>
            <h2 className={style.exerciseHeading}>
                Module Overview
            </h2>
            <br></br>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#rate">Rates of change</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#ex">Example with 1 d motion</a>
            </p>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
};

export function Modoverview1dm() {
    return (
        <>
            <h2 className={style.exerciseHeading}>
                Module Overview
            </h2>
            <br></br>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#pos">Position and displacement</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#vel">Velocity</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#speed">Speed</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#accel">Acceleration</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#calc">Calculus examples</a>
            </p>
            <br></br>
            <Vidicon />
            <p className={style.inlineContainer}>
                <a href="#free">Free-falling bodies don&#39;t have constant a</a>
            </p>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
};