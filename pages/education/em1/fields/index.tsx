import Link from 'next/link';
import style from '@/styles/general.module.css';
import FieldsEx from '@/pages/exercises/em1/fieldsex';
import Helpful from '@/pages/components/helpful';

const Efieldmat = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electric Fields in Matter
            </h1>
            <FieldsEx />
            <Helpful />
        </>
    );
}

export default Efieldmat;