import './SliderToggler.css'

function SliderToggler(props) {
    return (<div className="sliders-switcher-container">
        {Array(props.slidesQuantity).fill(1).map((slide, index) => <div
            className={"slider-toggle" + (props.currentSlide === index ? " active" : "")}
            key={index} onClick={() => props.changeSlide(index)}/>)}
    </div>);
}


export default SliderToggler;