import Link from 'next/link';
import style from '@/styles/general.module.css';

const Test3 = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 3</h1>
            <p>
                Test 3 will cover the following topics:
                <ol>
                    <li>
                        Momentum, impulse, and collisions
                    </li>
                    <li>
                        Rotational motion
                    </li>
                    <li>
                        Dynamics of rotational motion
                    </li>
                    <li>
                        Equilibrium
                    </li>
                    <li>
                        Taylor expansions
                    </li>
                    <li>
                        Gravity
                    </li>
                </ol>
            </p>
        </>
    );
}

export default Test3;