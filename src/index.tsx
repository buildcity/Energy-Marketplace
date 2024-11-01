import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const rootHtml = document.getElementById('root')

render(<App />, rootHtml)
serviceWorkerRegistration.register();
reportWebVitals();
