import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import Helpful from '@/pages/components/helpful';

const Gen = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br></br>
            <br></br>

                <h1 className={style.centerText}>
                    General research
                </h1>
                <h2>
                    America
                </h2>
                    <p>
                        Google - <ul>
                                    <li>
                                        Larry Page - America - Michigan, Stanford 
                                    </li>
                                    <li>
                                        Sergey Brin - Russia - Maryland, Stanford 
                                    </li>
                                    <li>
                                        Susan Wojcicki - America - Harvard
                                    </li>
                                    <li>
                                        Sundar - India - IIT, Stanford
                                    </li>
                                </ul> 
                        Apple - <ul>
                                    <li>
                                        Jobs - America - Reed
                                    </li>
                                </ul>
                    </p>
                <h2>
                    China
                </h2>
                <h2>
                    India
                </h2>
                <h2>
                    Iran
                </h2>
                <h2>
                    Japan
                </h2>
                <h2>
                    Russia
                </h2>
                <h2>
                    Other
                </h2>
                <p>
                    <ul>
                        <li>
                            <Link href="https://www.ietf.org/">Internet engineering task force</Link>
                        </li>
                    </ul>
                </p>
        </>
    );
}

export default Gen;