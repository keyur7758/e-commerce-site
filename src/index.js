import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import { Provider } from 'react-redux';
import {store} from './app/store'
import Cart from './components/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='Men' element={<Men/>}/>
        <Route path='Women' element={<Women/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
