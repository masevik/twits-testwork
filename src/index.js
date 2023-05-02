import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'components/GlobalStyle';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/twits-testwork">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
