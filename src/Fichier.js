import './App.css';
import { BsFileEarmarkArrowDown  } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import Telecharge from './Telecharge';
import Accordion from 'react-bootstrap/Accordion';
import {FormattedMessage} from 'react-intl';
import messages_en from "./en.json";
import messages_fr from "./fr.json";
import {IntlProvider} from "react-intl";
const language = "en";
const messages = {
    'en': messages_en,
    'fr': messages_fr
};
function Fichier() {
  return (
    <div className="App">
            <IntlProvider locale={language} messages={messages[language]}></IntlProvider>
  <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
       <Accordion.Header style={{fontSize:'30px'}}> <BsFileEarmarkArrowDown style={{fontSize:'30px'}} />
        <FormattedMessage id="fichier_csv"
                                      defaultMessage="       Charger les ajustements en Format CSV"
                                      description="Welcome header on app main page"
                                     
                    />
 </Accordion.Header>
        <Accordion.Body>
       <Telecharge/>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  );
}

export default Fichier;