import './GalarySlider.css'

import ImageSlide from "../ImageSlide/ImageSlide";
import SliderToggler from "../SliderToggler/SliderToggler"
import {useEffect, useState} from "react";

import image1 from '../images/slide_1.svg'
import image2 from '../images/slide_2.svg'
import image3 from '../images/slide_3.svg'
import image4 from '../images/slide_4.svg'
import {Fade} from "react-awesome-reveal";

const images = [image1, image2, image3, image4]
const highlighted = ["5 минут", "450m2", "200", "лекторий"]
const left = ["", "", "бар на", ""]
const right = ["от метро", "атмосферного пространства", "человек", ""]

function GalarySlider(props) {
    function changeSlide(actualSlide = currentSlide + 1) {
        let newSlide = actualSlide === images.length ? 0 : actualSlide;
        SetCurrentSlide(newSlide)
    }

    const [currentSlide, SetCurrentSlide] = useState(0)
    //console.log(currentSlide)
    useEffect(() => {
        const timer = setTimeout(() => {
            changeSlide()
        }, props.autoplayTime)

        return () => clearTimeout(timer)
    }, [currentSlide])
    return (<div className="GalarySlider-container">

            <div className="slider-container">
                {images.map((img, index) => (
                    <ImageSlide key={index} link={img} margin={index === 0 ? -currentSlide * 100 + '%' : null}
                                left={left[index]}
                                right={right[index]} highlighted={highlighted[index]}/>))}
            </div>
            <SliderToggler currentSlide={currentSlide} slidesQuantity={images.length} changeSlide={changeSlide}/>


    </div>);
}

export default GalarySlider;