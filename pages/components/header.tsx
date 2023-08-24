import style from '@/styles/general.module.css';
import { ProfileAv } from '@/pages/components/icons'; 


const Header = () => {
    return (
        <>
            <div className={style.headWrap}>
                <h1 className={style.Logo}>
                    JRFink
                </h1>
            </div>
        </>
    );
};

export default Header;