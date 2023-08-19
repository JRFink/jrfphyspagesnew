import Link from 'next/link';
import style from '@/styles/general.module.css';


const Final = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 4</h1>
            <p>
                The final exam will cover the following topics:
                <ol>
                    <li>
                        Frames, units, measurement
                    </li>
                    <li>
                        Vectors
                    </li>
                    <li>
                        Applications of calc
                    </li>
                    <li>
                        Motion in 1, 2, and 3 dimensions
                    </li>
                    <li>
                        Simple differential equations
                    </li>
                    <li>
                        Newton&#39;s first, second, and third law
                    </li>
                    <li>
                        Applications of Newton&#39;s laws
                    </li>
                    <li>
                        Work and kinetic energy
                    </li>
                    <li>
                        Potential energy and energy conservation
                    </li>
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
                    <li>
                        Fluids
                    </li>
                    <li>
                        Oscillations
                    </li>
                    <li>
                        Wave motion
                    </li>
                    <li>
                        Temperature and heat
                    </li>
                    <li>
                        Gases
                    </li>
                    <li>
                        First two laws of thermodynamics
                    </li>
                </ol>
            </p>
        </>
    );
}

export default Final;