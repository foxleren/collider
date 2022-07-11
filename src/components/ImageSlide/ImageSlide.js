import './ImageSlide.css'
import GalaryImage from '../GalaryImage/GalaryImage'

function ImageSlide(props) {
    return (<div className="slide-container" style={{marginLeft: props.margin}}>

        <div className="slide-text-container">
            <div className="slide-text">{props.left + " "}</div>
            <div className="slide-text highlighted">{props.highlighted}</div>
            <div className="slide-text">{" " + props.right}</div>
        </div>
        <GalaryImage extraClassName={"intro"} link={props.link}/>
    </div>);
}

export default ImageSlide;