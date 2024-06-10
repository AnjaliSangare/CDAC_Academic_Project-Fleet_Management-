import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Registration } from './RegistrationComponents/Registration';
import { CompanyInfo } from './CompanyInfo';
import Login from './LoginComponent/Login';
import MakeResevation from './Booking/MakeResevation';
import GetAllState  from './Booking/GetAllState';
import VehicalSelection from './Booking/VehicalSelection';
import RentalAddOn from './Booking/RentalAddOn';
import CustomerInformation from './Booking/CustomerInformation';
import BlankCustomerInfo from './Booking/BlankCustomerInfo';
import ConfirmBooking from './Booking/ConfirmBooking';
import CustomerCare from './CustomerCare';
import Career from './Career';
import ServicePage from './ServicePage';
import { AfterLogin } from './LoginComponent/AfterLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<CompanyInfo />} />
        <Route path="RegistrationComponents/Registration" element={<Registration />}/>
        <Route path="CompanyInfo" element={<CompanyInfo/>}/>
        <Route path="LoginComponent/Login" element={<Login/>}/>
        <Route path="LoginComponent/Login" element={<Login/>}/>
        <Route path="Booking/MakeResevation" element={<MakeResevation/>}/>
        <Route path="/CustomerCare" element={<CustomerCare/>}/>
        <Route path="/Career/" element={<Career/>}/> 

        <Route path="Booking/GetAllState" element={<GetAllState/>}/>
        <Route path="VehicalSelection" element={<VehicalSelection/>}/>
        <Route path="RentalAddOn" element={<RentalAddOn/>}/>
        <Route path="BlankCustomerInfo" element={<BlankCustomerInfo/>}/>
        <Route path="CustomerInformation" element={<CustomerInformation/>}/>
        <Route path="ConfirmBooking" element={<ConfirmBooking/>}/>
        <Route path="/Service/" element={<ServicePage/>}/>

        <Route path="/AfterLogin" element={<AfterLogin/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
