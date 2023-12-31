import Link from 'next/link'; 
import style from '@/styles/general.module.css';
import Shqipëria, {America, Argentina, 中國, Deutschland, भारत, ایران, 日本, Россия, Singapura, Türkiye, Caelominum} from './countComponents';

const Countr = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Countries
            </h1>
            <br />
            <p>
                Below you will find some info about different countries. 
            </p>
            <br />
            <p> 
                You can start with the <Link href="https://www.un.org/">UN</Link>
            </p>
            <br /> 
            <br />
            <Shqipëria />
            <br />
            <br />
            <America />
            <br />
            <br />
            <Argentina />
            <br />
            <br />
            <中國 />
            <br />
            <br />
            <Deutschland />
            <br />
            <br />
            <भारत />
            <br />
            <br />
            <ایران />
            <br />
            <br />
            <日本 />
            <br />
            <br />
            <Россия />
            <br />
            <br />
            <Singapura />
            <br />
            <br />
            <Türkiye />
            <br />
            <br />
            <Caelominum />     

        </>
    );
}

export default Countr;