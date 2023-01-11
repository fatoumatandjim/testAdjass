
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsPlusCircleFill  } from "react-icons/bs";
import { BiDownload  } from "react-icons/bi";
import './Telecharge.css';
import {FormattedMessage} from 'react-intl';
import messages_en from "./en.json";
import messages_fr from "./fr.json";
import {IntlProvider} from "react-intl";
const language = "en";
const messages = {
    'en': messages_en,
    'fr': messages_fr
};

function Telecharge() {
  return (
    <div className="App">
       <IntlProvider locale={language} messages={messages[language]}></IntlProvider>
    <div>
        <p style={{ marginRight:'1500px',fontSize:'20px'}} data-testid="title">
           <FormattedMessage id="Telecharge_csv"style={{ marginRight:'1500px',fontSize:'10px'}}
                                      defaultMessage="Telecharger un modele de fichier d'ajustement"
                                      description="Welcome header on app main page"
                                     
                    />
         
        <Card.Link href="#">Ici</Card.Link>
            </p>   
    </div>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <Card style={{ width: '20rem',height:'10rem',marginLeft:'180px', borderRadius:'20%' ,border:'solid 3px'}} className="card">
      <Card.Body>
      {/* <Fab color="dark" aria-label="add">
        <AddIcon />
      </Fab> */}
        <Card.Title>   <BsPlusCircleFill style={{ width: '7rem',height:'4rem'}}/></Card.Title><br />
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
      
        
        <Card.Link href="#">Integre le fichier csv</Card.Link>
      
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm">
    <Button variant="light" className="button" size="lg" style={{ marginRight:'400px' ,marginTop:'30px'  ,border:'solid 4px',width:'18rem'}} disabled>
     <BiDownload className="icon"/> Telecharger le Fichier
      </Button>{' '}
    </div>
    
  </div>
</div>
    </div>
  );
}

export default Telecharge;
