import Link from 'next/link';
import style from '@/styles/general.module.css';

const OnedmTest = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 1</h1>
            <p>
                Test 1 will cover the following topics:
                {/* <ul>
                    <li></li>
                </ul> */}
            </p>
        </>
    );
}

export default OnedmTest;