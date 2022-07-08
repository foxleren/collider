import './ImageSlide.css'

function ImageSlide(props) {
    return (
        <div className="slide-container" style={{marginLeft: props.margin}}>
            <img className="image-slide" src={props.link} alt=""/>
            <div className="slide-text-container">
                <div className="slide-text">{props.left + " "}</div>
                <div className="slide-text highlighted">{props.highlighted}</div>
                <div className="slide-text">{" " + props.right}</div>
            </div>

        </div>);
}

export default ImageSlide;