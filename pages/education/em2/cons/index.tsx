import Link from 'next/link';
import style from '@/styles/general.module.css';
import ConsEx from '@/pages/exercises/em2/consex';
import Helpful from '@/pages/components/helpful';

const Cons = () => {
    return (
        <>
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Conservation Laws
            </h1>
            <ConsEx />
            <Helpful />
        </>
    );
}

export default Cons;