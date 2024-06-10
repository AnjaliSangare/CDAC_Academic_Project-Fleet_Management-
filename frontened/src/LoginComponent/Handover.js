import React, { useState } from 'react';

export function Handover() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fuelstatus, setFuelStatus] = useState('');
  const [vehicleregno, setVehicleRegno] = useState('');
  const [customdetail,setCustomerDetail]=useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleFuelChange = (event) => {
    setFuelStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     console.log('Submitted:', vehicleregno, fuelstatus);

    //  fetch("http://localhost:8080/customer/"+vehicleregno)
    //  .then(res=>res.json())
    //  .then((result)=>{setCustomerDetail(result)},[]);

    fetch("http://localhost:8080/customer/" + vehicleregno)
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(result => {
      if (result && Object.keys(result).length > 0) {
        setCustomerDetail(result);
      } else {
        setErrorMessage("No customer details found for the given vehicle regno");
      }
    })
    .catch(error => {
      console.error("Error fetching customer details:", error);
      setErrorMessage("An error occurred while fetching customer details.Invalid Booking Id.");
    });




    togglePopup();
  };

  const handleRegNoChange = (event) => {
    setVehicleRegno(event.target.value);

  };

  return (
    <div>
        <br></br>
      <button onClick={togglePopup}><h4>Fill details For Handover</h4></button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Booking Confirmation</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Booking Id  :
                      
                <input type="text" value={vehicleregno} onChange={handleRegNoChange} />
              </label>
              <br />
              <label>
                Fuel Status :    
                
                <label>
                  <input
                    type="radio"
                    value="Full"
                    checked={fuelstatus === 'Full'}
                    onChange={handleFuelChange}
                  />
                  Full
                </label>
                <label>
                  <input
                    type="radio"
                    value="Half"
                    checked={fuelstatus === 'Half'}
                    onChange={handleFuelChange}
                  />
                  Half
                </label>
                <label>
                  <input
                    type="radio"
                    value="Empty"
                    checked={fuelstatus === 'Empty'}
                    onChange={handleFuelChange}
                  />
                  Empty
                </label>
              </label>
              <br />
              <button type="submit">Submit</button>
              <button onClick={togglePopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}


{errorMessage && (
  <div className="error-message">
    <h1 className="error-text">{errorMessage}</h1>
  </div>
)}

{!errorMessage && customdetail && Object.keys(customdetail).length > 0 && (
  <div className="receipt">
    <h3>Customer Receipt</h3>
    <div className="receipt-details">
      <div className="detail-column">
        <p><strong>Name:</strong> {customdetail.firstName} {customdetail.lastName}</p>
        <p><strong>Email:</strong> {customdetail.email}</p>
        <p><strong>Date of Birth:</strong> {customdetail.dob}</p>
        <p><strong>Driving License:</strong> {customdetail.drivingLicence}</p>
        <p><strong>Credit Card Type:</strong> {customdetail.creditCardType}</p>
      </div>
      <div className="detail-column">
        <p><strong>Address:</strong> {customdetail.address1}, {customdetail.address2}</p>
        <p><strong>City:</strong> {customdetail.cityId.cityName}</p>
        <p><strong>State:</strong> {customdetail.stateId.stateName}</p>
        <p><strong>Pin:</strong> {customdetail.pin}</p>
        <p><strong>Phone:</strong> {customdetail.phone}</p>
      </div>
      <div className="detail-column">
        <p><strong>Driving License Issued By:</strong> {customdetail.dlIssuedBy}</p>
        <p><strong>Driving License Valid Through:</strong> {customdetail.dlValidThrough}</p>
        <p><strong>Passport Number:</strong> {customdetail.passportNumber}</p>
        <p><strong>Passport Issued By:</strong> {customdetail.passportIssuedBy}</p>
        <p><strong>Passport Valid Upto:</strong> {customdetail.passportValidUpto}</p>
      </div> 
    </div>
    <p>
  <strong style={{ color: 'blue' }}>Fuel Status at the time of Handover:</strong>
  <span style={{ color: 'red', fontWeight: 'bold' }}>{fuelstatus}</span>
</p>


  </div>
)}




      <style>
        {`

.error-message {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .error-text {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
          .popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
          }

          .receipt {
            border: 1px solid #ccc;
            padding: 10px;
            margin-top: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          }

          .receipt-details {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #ccc;
            padding-top: 10px;
            margin-top: 10px;
          }

          .detail-column {
            flex: 1;
            padding: 0 10px;
          }
        `}
      </style>
    </div>
  );
}
