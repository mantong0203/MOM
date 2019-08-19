import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCalendar, faListUl, faListOl, faPenAlt, faGlobeAmericas, faBookOpen, faCalendarCheck, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import { AgendaListProvider } from './contexts/AgendaListContext'
import { AgendaProvider } from './contexts/AgendaContext'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

library.add(
    fas,
    
    faCalendar, // logo
    faListUl, // style: listicle
    faListOl, // style: howto
    faGlobeAmericas, // style: news
    faPenAlt, // style: interview
    faBookOpen, // style: story
    faCalendarCheck,
    faQuoteLeft,
  )
ReactDOM.render(
    <BrowserRouter>
        <AgendaListProvider>
            <AgendaProvider>
                <App />
            </AgendaProvider>
        </AgendaListProvider>
    </BrowserRouter>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
