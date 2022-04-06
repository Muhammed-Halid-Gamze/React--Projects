import './App.css';
import {IntlProvider, FormattedMessage} from "react-intl";
import { useState,useEffect } from 'react';

const messages= {
  'tr-TR':{
    title: "Merhaba Dünya",
    description:"{count} yeni mesajınız var"
  },
  'en-US':{
    title: "Hello World",
    description:"You have {count} new messages"
  },
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale]= useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem('locale',locale)
  },[locale])
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className='App'>

        <FormattedMessage id="title"/>
        <br/>
        <p>
          <FormattedMessage id='description'values={{count:5}}/>
        </p>
        <br/>

        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
        
      </div>
    </IntlProvider>
  );
}

export default App;
