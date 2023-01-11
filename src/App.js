import {FormattedMessage} from 'react-intl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Fichier from './Fichier';
import Home from './Home';
import Recherche from './Recherche';
import {IntlProvider} from "react-intl";
import messages_en from "./en.json";
import messages_fr from "./fr.json";
import Grill from './Grill';
const language = "en";
const messages = {
    'en': messages_en,
    'fr': messages_fr
};
function App() {

  return (

    <div className="App">
       <IntlProvider locale={language} messages={messages[language]}></IntlProvider>
    
      <NavBar/><br /><br />
      <Fichier/><br />
    <Home/>
  
     <Recherche/>
     <Grill/>

    </div>
  );
}

export default App;
