import style from '@/styles/general.module.css';

const Donor = () => {
    return (
        <> 
            <div className={style.centerText}>
                <h1>
                    Donors
                </h1>
                <p>
                    Thank you to all of our donors. This site wouldn&apos;t be possible without you!
                </p>
                <br></br>
            </div>
            <div className={style.containBulletList}>
                    <ul className={style.styleBullets}>
                        <li>Mike & Maureen Fink</li>
                        <br />
                        <li>Mike & Kathy Miks</li>
                        <br />
                        <li>John and Rosemary Miks</li>
                        <br />
                        <li>Pujitha P&#46;</li>
                    </ul>
            </div>
            <br></br>
            <p className={style.centerText}>
                Consider a <a href="https://buy.stripe.com/eVabMhgPyaKB1mEbIJ">donation</a>
            </p>
        </>
    );
}

export default Donor;