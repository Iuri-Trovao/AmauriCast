import ToggleModeButton from "../components/ToggleModeButton/ToggleModeButton"
import HamburgerButton from "../components/HamburgerButton/HamburgerButton"
import "./NavBar.scss"
const ImgLogoNav = "./public/img/logo1.png"
const ImgNavBarLogo = "./public/img/iconnav.png"
function NavBar() {
    return (
        <>
            <nav className="NavBar">
                <section className="section-logo">
                    <img src={ImgLogoNav} alt="" />
                </section>

                <a href="#">procedimento</a>
                <a href="#">procedimento</a>
                <a href="#">procedimento</a>
                <a href="#">procedimento</a>

                <section className="section-buttonmode">
                    <ToggleModeButton></ToggleModeButton>
                </section>

                <HamburgerButton></HamburgerButton>

            </nav>

            <nav className="NavBarLogo">
                <img src={ImgNavBarLogo} alt="" />
            </nav>

            <nav className="NavBar2">
                <a href="#">procedimento</a>
                <a href="#">procedimento</a>
                <a href="#">procedimento</a>
                <a href="#">procedimento</a>
            </nav>
        </>

    )
}

export default NavBar