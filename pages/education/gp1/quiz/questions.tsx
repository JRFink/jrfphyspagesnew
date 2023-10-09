import Link from 'next/link';
import style from '@/styles/general.module.css';

export default function FrameQuestions () {
    return (
        <>
            <ul>
                <li>Reference frames</li>
                <li>Units</li>
                <li>Measurement</li>
            </ul>
        </>
    );
};

export function OnedmQuestions () {
    return (
        <>
            <ul>
                <li>Position and displacement</li>
                <li>Velocity</li>
                <li>Speed</li>
                <li>Acceleration</li>
                <li>Calculus examples</li>
                <li>Free falling bodies</li>
            </ul>
        </>
    );
}

export function TwodmQuestions () {
    return (
        <>
            <ul>
                <li>Position and displacement</li>
                <li>Velocity</li>
                <li>Acceleration</li>
                <li>Projectile motion</li>
                <li>Uniform circular motion</li>
                <li>Relative motion in 1 d</li>
                <li>Relative motion in 2 d</li>
            </ul>
        </>
    );
}