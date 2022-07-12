
import './Preloader.css'

function Preloader() {
    return (
        <div className={"preloader"} id="preloader">
            <div className="preloader-logo"/>
            <div className="progress-bar">
                <div className="progress-value"></div>
            </div>
        </div>
    );
}

export default Preloader;