import './ContactsPage.css'

import GalaryImage from '../GalaryImage/GalaryImage'

function ContactsPage() {
    return (
        <div className="ContactsPage-container" id="Contacts">
            <div className="ContactsPage-title">НАШИ <span>КОНТАКТЫ</span></div>
            <div className="ContactsPage-text-container">
                <div className="ContactsPage-text">COLLIDER</div>
                <div className="ContactsPage-text">м. Савёловская</div>
                <div className="ContactsPage-text">Вятская 27, ст 7</div>
                <div className="ContactsPage-text">Бизнес квартал "Фактория"</div>
                <div className="ContactsPage-text">Подробная информация:</div>
                <div className="ContactsPage-text">+7 999 825 22 39/ Telegram</div>
                <div className="ContactsPage-text">event@collider.ru</div>
            </div>

            <GalaryImage link={"/images/contacts.svg"} extraClassName="contacts"/>
        </div>
    );
}

export default ContactsPage;