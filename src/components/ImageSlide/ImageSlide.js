import './ImageSlide.css'
import GalaryImage from '../GalaryImage/GalaryImage'

function ImageSlide(props) {
    return (<div className="slide-container" style={{marginLeft: props.margin}}>

        <GalaryImage extraClassName={"slide"} link={props.link}/>
        <div className="slide-text-container">
        <div className="slide-text">{props.left + " "}</div>
        <div className="slide-text highlighted">{props.highlighted}</div>
        <div className="slide-text">{" " + props.right}</div>
    </div>

    </div>);
}

export default ImageSlide;