import Link from 'next/link';
import style from '@/styles/general.module.css'; 

const Final = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Final exam
            </h1>
            <p>
                The final will cover the following topics...
            </p>
            <p>
                <ul>
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
                        Idealized models 
                    </li>
                    <li> 
                        Motion in 1 dimension
                    </li>
                    <li> 
                        Point particles in 2, 3 dimensions
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
                        First law of thermo
                    </li>
                    <li>
                        Second law of thermo
                    </li>
                </ul>
            </p>
        </>
    );
}

export default Final; 