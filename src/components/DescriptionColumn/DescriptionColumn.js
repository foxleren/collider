import './DescriptionColumn.css'
import {Fade} from "react-awesome-reveal";

function DescriptionColumn() {
    return (
       <div className="DescriptionColumn-container">
           <Fade cascade={true} direction={"right"}>
               <div className="DescriptionColumn-text highlighted" style={{marginLeft: "0px"}}>ВЕЧЕРИНКИ</div>
               <div className="DescriptionColumn-text" style={{marginLeft: "70px"}}>КОНЦЕРТЫ</div>
               <div className="DescriptionColumn-text" style={{marginLeft: "140px"}}>СТЕНДАПЫ</div>
               <div className="DescriptionColumn-text highlighted" style={{marginLeft: "210px"}}>НЕТВОРКИНГИ</div>
               <div className="DescriptionColumn-text" style={{marginLeft: "280px"}}>БРИФИНГИ</div>
               <div className="DescriptionColumn-text highlighted" style={{marginLeft: "350px"}}>ЛЕКЦИИ</div>
               <div className="DescriptionColumn-text" style={{marginLeft: "420px"}}>МАСТЕР-КЛАССЫ</div>
           </Fade>
       </div>
    );
}

export default DescriptionColumn;