import './App.css';
import {IntlProvider, FormattedMessage} from "react-intl";
import { useState } from 'react';

const messages= {
  'tr-TR':{
    title: "Merhaba Dünya",
    description:"3 yeni mesajınız var"
  },
  'en-US':{
    title: "Hello World",
    description:"You have 3 new messages"
  },
};
function App() {
  const [lang, setLang]= useState("tr-TR")
  return (
    <IntlProvider messages={messages[lang]}>
      <div className='App'>

        <FormattedMessage id="title"/>
        <br/>
        <p>
          <FormattedMessage id='description'/>
        </p>
        <br/>

        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
        
      </div>
    </IntlProvider>
  );
}

export default App;
