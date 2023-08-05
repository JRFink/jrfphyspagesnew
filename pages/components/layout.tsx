import Header from './header';
import Navbar from './navbar';
import style from '@/styles/general.module.css';
import Footer from './footer';


const Layout = ({children} : {children: any}) => {
    return (
        <>
            <div className={style.parentDiv}> {/* this is for pushing the footer to the bottom */}
                <Header />
                <Navbar />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;

