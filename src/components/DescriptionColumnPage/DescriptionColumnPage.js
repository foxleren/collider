import './DescriptionColumnPage.css'

import GalaryImage from '../GalaryImage/GalaryImage'
import DescriptionColumn from '../DescriptionColumn/DescriptionColumn';

function DescriptionColumnPage() {
    return (
        <div className="DescriptionColumnPage-container">
            <DescriptionColumn/>
            <GalaryImage link={"/images/column_background_1.svg"} extraClassName={"fullscreen"}/>
            <GalaryImage link={"/images/column_background_2.svg"} extraClassName={"fullscreen"}/>
        </div>
    );
}

export default DescriptionColumnPage;