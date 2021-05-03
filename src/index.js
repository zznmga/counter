import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StorageContext } from './context';
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StorageContext.Provider value={store}>
        <App />
      </StorageContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();

reportWebVitals();
