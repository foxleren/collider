import './DescriptionColumn.css'

function DescriptionColumn() {
    return (
       <div className="DescriptionColumn-container">
           <div className="DescriptionColumn-text highlighted">ВЕЧЕРИНКИ</div>
           <div className="DescriptionColumn-text">КОНЦЕРТЫ</div>
           <div className="DescriptionColumn-text">СТЕНДАПЫ</div>
           <div className="DescriptionColumn-text highlighted">НЕТВОРКИНГИ</div>
           <div className="DescriptionColumn-text">БРИФИНГИ</div>
           <div className="DescriptionColumn-text highlighted">ЛЕКЦИИ</div>
           <div className="DescriptionColumn-text">МАСТЕР-КЛАССЫ</div>
       </div>
    );
}

export default DescriptionColumn;