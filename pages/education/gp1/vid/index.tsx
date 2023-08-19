import style from '@/styles/general.module.css';
import ConstantPosVid from '@/public/videos/gp1/constantpos';
import AccelVid from '@/public/videos/gp1/accelvid';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import { Modoverview1dm } from '@/pages/components/modoverview';

const Gp1Vid = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Gen phys 1 videos - bingeworthy
            </h1>
            <ConstantPosVid />
        </>
    );
}

export default Gp1Vid;