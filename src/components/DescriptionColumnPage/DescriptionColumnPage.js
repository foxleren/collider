import './DescriptionColumnPage.css'

import GalaryImage from '../GalaryImage/GalaryImage'
import DescriptionColumn from '../DescriptionColumn/DescriptionColumn';
import {Fade} from "react-awesome-reveal";

function DescriptionColumnPage() {
    return (<div className="DescriptionColumnPage-container">

        <Fade direction={"left"}>
            <GalaryImage link={"/images/column_background_1.svg"} extraClassName={"half-height"}/>
        </Fade>
        <Fade direction={"right"}>
            <GalaryImage link={"/images/column_background_2.svg"} extraClassName={"half-height"}/>
        </Fade>
        <DescriptionColumn/>
    </div>);
}

export default DescriptionColumnPage;