
import "./ToggleModeButton.scss"
function ToggleModeButton() {

    
    return (
        <>
            <input type="checkbox" className="checkbox" id="checkbox"></input>
            <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
            </label>
        </>
    )
}

export default ToggleModeButton