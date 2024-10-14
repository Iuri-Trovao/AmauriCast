import "./HamburgerButton.scss"
const HamburguerButtonIcon = "./public/img/hamburger.png"
function HamburgerButton(){
    return (
        <>
        <button className="buttonhamburger"><img src={HamburguerButtonIcon} alt="" /></button>
        </>
    )
}

export default HamburgerButton